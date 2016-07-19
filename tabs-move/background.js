
function moveMoz(tabs) {
  console.log(tabs);
  var mozTabIds = tabs.map((tabInfo)=>{return tabInfo.id});
  chrome.tabs.move(mozTabIds, {index:0});
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({url:"*://*.mozilla.org/*"}, moveMoz);
});
