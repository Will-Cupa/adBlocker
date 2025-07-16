browser.webRequest.onBeforeRequest.addListener(
    function(details) {
        blockList = [
            "/ptracking?pltype=adhost",
            "doubleclick.net",
            "googleadservices.com",
            "googlesyndication.com"
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
  
