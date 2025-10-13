document.addEventListener("DOMContentLoaded", () => {
  const enableGoogleAppender = document.getElementById("enableGoogleAppender");
  const onlyModifyRedditSearches = document.getElementById("onlyModifyRedditSearches");

  // Load saved preference
  chrome.storage.local.get(["googleAppenderEnabled", "onlyModifyRedditSearches"], (data) => {
    // If not set before, data.googleAppenderEnabled might be undefined
    // so we convert it to a boolean
    enableGoogleAppender.checked = data.googleAppenderEnabled === true;
    onlyModifyRedditSearches.checked = data.onlyModifyRedditSearches === true;
  });

  // Update preference when user toggles checkbox
  enableGoogleAppender.addEventListener("change", () => {
    chrome.storage.local.set({ googleAppenderEnabled: enableGoogleAppender.checked });
  });

  onlyModifyRedditSearches.addEventListener("change", () => {
    chrome.storage.local.set({ onlyModifyRedditSearches: onlyModifyRedditSearches.checked });
  });
});
