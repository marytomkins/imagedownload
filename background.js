function MyImageClick(info, tab){
    console.log("Clicked image", info, tab);
    /*
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
*/
chrome.downloads.download({"url": info.srcUrl})
}

function MyQuoteClick(info, tab){
    console.log("Clicked quote", info, tab);
    /*
    chrome.windows.create({
        "url": "https://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
    */
   chrome.downloads.download(info.srcUrl)


}

chrome.contextMenus.create({
    "title": "Download Image",
    "contexts": ["image"],
    "onclick": MyImageClick
})

chrome.contextMenus.create({
    "title": "Share Quote",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
})


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg)
    sendResponse({"text": "Received the links"});

})