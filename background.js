chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      // Check if the request URL matches a blocked website
      if (isWebsiteBlocked(details.url)) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  function isWebsiteBlocked(url) {
    // Implement logic to check if the URL is blocked based on user settings
    // For example, you can store blocked websites in Chrome storage and check against it.
    return false; // Return true to block the website, false to allow
  }
  