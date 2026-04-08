// background.js — service worker
// Opens the side panel when the toolbar icon is clicked.

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch(console.error);
