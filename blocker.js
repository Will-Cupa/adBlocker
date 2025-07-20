browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        blockList = [
            "doubleclick.net",
            "googleadservices.com",
            "googlesyndication.com",
            "youtube.com/pagead"
        ];
        shouldBlock = blockList.some(domain => details.url.includes(domain));

        if(!shouldBlock){
            console.log(details.url)
        }

        return { cancel: shouldBlock };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );  
  
