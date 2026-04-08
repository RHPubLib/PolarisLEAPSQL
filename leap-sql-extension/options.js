// options.js — save and load settings from chrome.storage.sync
// Managed storage (pushed via Google Admin Console) provides defaults;
// values saved here in sync storage override them per-user.

const KEYS = ["apiKey", "apiBaseUrl", "modelId", "leapUrlPattern", "sqlSelector"];

async function load() {
  // Read managed policy (IT-pushed) and sync (user-saved) in parallel
  const [managed, synced] = await Promise.all([
    chrome.storage.managed.get(KEYS).catch(() => ({})),
    chrome.storage.sync.get(KEYS),
  ]);

  // Sync values win over managed defaults
  const data = { ...managed, ...synced };

  document.getElementById("apiKey").value         = data.apiKey        || "";
  document.getElementById("apiBaseUrl").value     = data.apiBaseUrl    || "https://your-openwebui-server";
  document.getElementById("modelId").value        = data.modelId       || "polaris-sql-helper";
  document.getElementById("leapUrlPattern").value = data.leapUrlPattern || "";
  document.getElementById("sqlSelector").value    = data.sqlSelector   ||
    "#find-tool > div > div.erms-search-panel > div.erms-inline-form > div > div.erms-search-input > input";

  // Show a note if values are coming from IT policy
  if (managed.apiKey && !synced.apiKey) {
    document.getElementById("apiKey").placeholder = "(set by IT policy)";
  }
}

async function save() {
  const statusEl = document.getElementById("status");
  const values = {
    apiKey:         document.getElementById("apiKey").value.trim(),
    apiBaseUrl:     document.getElementById("apiBaseUrl").value.trim() || "https://your-openwebui-server",
    modelId:        document.getElementById("modelId").value.trim() || "polaris-sql-helper",
    leapUrlPattern: document.getElementById("leapUrlPattern").value.trim(),
    sqlSelector:    document.getElementById("sqlSelector").value.trim() ||
      "#find-tool > div > div.erms-search-panel > div.erms-inline-form > div > div.erms-search-input > input",
  };

  // Don't write empty apiKey to sync — leave managed value in effect
  if (!values.apiKey) delete values.apiKey;

  try {
    await chrome.storage.sync.set(values);
    statusEl.textContent = "✓ Saved";
    statusEl.className = "";
    setTimeout(() => { statusEl.textContent = ""; }, 3000);
  } catch (err) {
    statusEl.textContent = "Error: " + err.message;
    statusEl.className = "error";
  }
}

document.getElementById("save-btn").addEventListener("click", save);
load();
