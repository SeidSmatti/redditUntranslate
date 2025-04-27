chrome.storage.local.get(["googleAppenderEnabled"], (data) => {
  // If the user hasn't enabled the feature, do nothing
  if (!data.googleAppenderEnabled) return;

  // Build a URL object from the current location
  const currentUrl = new URL(window.location.href);
  const q = currentUrl.searchParams.get("q"); // "q" param is the search query

  // If there's a query and it doesn't already include our appender
  if (q && !q.includes("-inurl:?tl=")) {
    const newQuery = q + " -inurl:?tl=";
    currentUrl.searchParams.set("q", newQuery);

    // Redirect once; won't infinite loop because now "q" has our string
    window.location.replace(currentUrl.toString());
  }
});
