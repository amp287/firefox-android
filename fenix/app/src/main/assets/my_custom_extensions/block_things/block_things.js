chrome.webRequest.onBeforeRequest.addListener(
  function(details) {

   /*if(details.url.contains("genesys.okta.com")) {
        console.log("Muffalo");
        return {cancel: false};
    }  */

    console.log("Buffalo");

    return {cancel: true};
  },
  {urls: ["<all_urls>"], types: ["image", "video", "media", "image/gif", "gif", "png", "jpeg", "x-mpegurl", "mpt2"]},
  ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        return {cancel: true};
    },
    {urls: ["*://*.google.com/*?*tbm=isch*"]},
    ["blocking"]
)

chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        console.log("muffalo");
        return {cancel: true};
    },
    {urls: ["<all_urls>"], types: ["image", "video", "media", "image/webp"]},
    ["blocking"]
)
