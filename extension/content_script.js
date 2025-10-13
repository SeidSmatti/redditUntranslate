chrome.storage.local.get(["googleAppenderEnabled", "onlyModifyRedditSearches"], (data) => {
  // If the user hasn't enabled the feature, do nothing
  if (!data.googleAppenderEnabled) return;

  // Build a URL object from the current location
  const currentUrl = new URL(window.location.href);
  const q = currentUrl.searchParams.get("q"); // "q" param is the search query

  // If there's a query and it doesn't already include our appender
  // and we it is a reddit search or we are modifying all searches
  if (q && !q.includes("-inurl:?tl=") && (q.includes("reddit") || !data.onlyModifyRedditSearches)) {
    const newQuery = q + " -inurl:?tl=";
    currentUrl.searchParams.set("q", newQuery);

    // Redirect once; won't infinite loop because now "q" has our string
    window.location.replace(currentUrl.toString());
  }
});
