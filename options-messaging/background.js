function gotMessage(m) {
  if (m.from_options) {
    console.log(m);
    chrome.runtime.sendMessage({from_background:"got your message"});
 }
}

chrome.runtime.onMessage.addListener(gotMessage);

chrome.browserAction.onClicked.addListener(function() {
  chrome.runtime.openOptionsPage();
});
