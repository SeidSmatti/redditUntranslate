chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    if (url.searchParams.has('tl')) {
      url.searchParams.delete('tl');
      return {redirectUrl: url.toString()};
    }
  },
  {urls: ["https://www.reddit.com/*"]},
  ["blocking"]
);

