// content.js — injected into LEAP pages
// Listens for insertSQL messages from the popup and fills the SQL input field.

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action !== "insertSQL") return;

  const selector = message.selector || "textarea";
  const query = message.query;

  const el = document.querySelector(selector);
  if (!el) {
    sendResponse({ ok: false, error: `No element found for selector: ${selector}` });
    return;
  }

  // Set value — works for plain inputs and textareas
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype, "value"
  ) || Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");

  if (nativeInputValueSetter && nativeInputValueSetter.set) {
    nativeInputValueSetter.set.call(el, query);
  } else {
    el.value = query;
  }

  // Dispatch events so React/Angular/Vue register the change
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
  el.focus();

  sendResponse({ ok: true });
});
