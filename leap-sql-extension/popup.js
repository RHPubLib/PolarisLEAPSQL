// popup.js — handles the chat UI, API call, SQL extraction, and LEAP injection

// ── DOM refs ──────────────────────────────────────────────────────────────────
const questionEl    = document.getElementById("question");
const askBtn        = document.getElementById("ask-btn");
const loadingEl     = document.getElementById("loading");
const chatArea      = document.getElementById("chat-area");
const responseText  = document.getElementById("response-text");
const sqlBlock      = document.getElementById("sql-block");
const sqlCode       = document.getElementById("sql-code");
const insertBtn     = document.getElementById("insert-btn");
const copyBtn       = document.getElementById("copy-btn");
const errorMsg      = document.getElementById("error-msg");
const notConfigured = document.getElementById("not-configured");
const optionsLink   = document.getElementById("options-link");
const openOptions   = document.getElementById("open-options");

// ── State ─────────────────────────────────────────────────────────────────────
let currentSQL = "";

// ── Active tab helper — always fresh ─────────────────────────────────────────
async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab || null;
}

// ── Init ──────────────────────────────────────────────────────────────────────
async function init() {
  optionsLink.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.runtime.openOptionsPage();
  });
  if (openOptions) {
    openOptions.addEventListener("click", (e) => {
      e.preventDefault();
      chrome.runtime.openOptionsPage();
    });
  }

  const [managed, synced] = await Promise.all([
    chrome.storage.managed.get("apiKey").catch(() => ({})),
    chrome.storage.sync.get("apiKey"),
  ]);
  const apiKey = synced.apiKey || managed.apiKey;
  if (!apiKey) {
    notConfigured.classList.remove("hidden");
    askBtn.disabled = true;
  }

  askBtn.addEventListener("click", handleAsk);
  questionEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleAsk();
  });
  insertBtn.addEventListener("click", handleInsert);
  copyBtn.addEventListener("click", handleCopy);

  // Re-evaluate the Insert button whenever the user switches tabs
  chrome.tabs.onActivated.addListener(() => {
    if (currentSQL) updateInsertButton();
  });
  chrome.tabs.onUpdated.addListener((_id, change) => {
    if (change.url && currentSQL) updateInsertButton();
  });
}

// ── Ask ───────────────────────────────────────────────────────────────────────
async function handleAsk() {
  const question = questionEl.value.trim();
  if (!question) return;

  const [managed, synced] = await Promise.all([
    chrome.storage.managed.get(["apiKey", "modelId", "apiBaseUrl"]).catch(() => ({})),
    chrome.storage.sync.get(["apiKey", "modelId", "apiBaseUrl"]),
  ]);
  const { apiKey, modelId, apiBaseUrl } = { ...managed, ...synced };
  if (!apiKey) {
    showError("API key not configured. Open Settings to add it.");
    return;
  }

  setLoading(true);
  clearResults();

  try {
    const baseUrl = (apiBaseUrl || "https://your-openwebui-server").replace(/\/$/, "");
    const apiUrl = `${baseUrl}/api/chat/completions`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelId || "polaris-sql-helper",
        messages: [{ role: "user", content: question }],
        stream: false,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API error ${response.status}: ${text}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || "";
    displayResponse(content);
  } catch (err) {
    showError(err.message);
  } finally {
    setLoading(false);
  }
}

// ── Display response ──────────────────────────────────────────────────────────
function displayResponse(content) {
  responseText.textContent = content;
  chatArea.classList.remove("hidden");

  const sqlMatch = content.match(/```sql\s*([\s\S]*?)```/i);
  if (sqlMatch) {
    currentSQL = sqlMatch[1].trim();
    sqlCode.textContent = currentSQL;
    sqlBlock.classList.remove("hidden");
    updateInsertButton();
  }
}

// ── Insert into LEAP ──────────────────────────────────────────────────────────
async function handleInsert() {
  if (!currentSQL) return;

  const tab = await getActiveTab();
  if (!tab) {
    showError("Could not detect the active tab.");
    return;
  }

  const [managedSel, syncedSel] = await Promise.all([
    chrome.storage.managed.get("sqlSelector").catch(() => ({})),
    chrome.storage.sync.get("sqlSelector"),
  ]);
  const sqlSelector = syncedSel.sqlSelector || managedSel.sqlSelector;
  const selector = sqlSelector ||
    "#find-tool > div > div.erms-search-panel > div.erms-inline-form > div > div.erms-search-input > input";

  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (sel, query) => {
        const el = document.querySelector(sel);
        if (!el) return { ok: false, error: `No element found for: ${sel}` };

        // Use native setter so React/Angular registers the change
        const proto = el instanceof HTMLInputElement
          ? HTMLInputElement.prototype
          : HTMLTextAreaElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
        if (setter) {
          setter.call(el, query);
        } else {
          el.value = query;
        }
        el.dispatchEvent(new Event("input",  { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
        el.focus();
        return { ok: true };
      },
      args: [selector, currentSQL],
    });

    const result = results?.[0]?.result;
    if (result?.ok) {
      insertBtn.textContent = "✓ Inserted!";
      setTimeout(() => { insertBtn.textContent = "⎘ Insert into LEAP"; }, 2000);
    } else {
      showError(result?.error || "Insertion failed — check the SQL field selector in Settings.");
    }
  } catch (err) {
    showError(`Injection failed: ${err.message}`);
  }
}

// ── Copy to clipboard ─────────────────────────────────────────────────────────
async function handleCopy() {
  if (!currentSQL) return;
  await navigator.clipboard.writeText(currentSQL);
  copyBtn.textContent = "✓ Copied!";
  setTimeout(() => { copyBtn.textContent = "⎘ Copy"; }, 2000);
}

// ── Insert button state ───────────────────────────────────────────────────────
async function updateInsertButton() {
  const [managedUrl, syncedUrl] = await Promise.all([
    chrome.storage.managed.get("leapUrlPattern").catch(() => ({})),
    chrome.storage.sync.get("leapUrlPattern"),
  ]);
  const leapUrlPattern = syncedUrl.leapUrlPattern || managedUrl.leapUrlPattern;
  const tab = await getActiveTab();
  const url = tab?.url || "";

  let isLeapTab = false;
  if (leapUrlPattern && url) {
    const escaped = leapUrlPattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    isLeapTab = new RegExp(escaped).test(url);
  } else if (!leapUrlPattern) {
    isLeapTab = true;
  }

  insertBtn.disabled = !isLeapTab;
  insertBtn.title = isLeapTab
    ? "Insert query into the LEAP Find Tool SQL field"
    : "Switch to your LEAP tab first";
  insertBtn.textContent = "⎘ Insert into LEAP";
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function setLoading(on) {
  loadingEl.classList.toggle("hidden", !on);
  askBtn.disabled = on;
  questionEl.disabled = on;
}

function clearResults() {
  responseText.textContent = "";
  sqlCode.textContent = "";
  sqlBlock.classList.add("hidden");
  chatArea.classList.add("hidden");
  errorMsg.classList.add("hidden");
  currentSQL = "";
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.classList.remove("hidden");
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
init();
