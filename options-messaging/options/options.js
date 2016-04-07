

function send() {
  chrome.runtime.sendMessage({"from_options": "they clicked"});
}

document.querySelector("#send").addEventListener("click", send);

chrome.runtime.onMessage.addListener((m)=>{
  if (m.from_background) {
    console.log(m);
  }
});
