document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("enableGoogleAppender");

  // Load saved preference
  chrome.storage.local.get(["googleAppenderEnabled"], (data) => {
    // If not set before, data.googleAppenderEnabled might be undefined
    // so we convert it to a boolean
    checkbox.checked = data.googleAppenderEnabled === true;
  });

  // Update preference when user toggles checkbox
  checkbox.addEventListener("change", () => {
    chrome.storage.local.set({ googleAppenderEnabled: checkbox.checked });
  });
});
