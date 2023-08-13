chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("https://mail.google.com/mail/u/0/") && tab.url.includes("?compose=")) {
    chrome.tabs.sendMessage(tabId, {
      type: "compose"
    });
  }
});