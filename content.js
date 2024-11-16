chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.message === "copyText") {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      sendResponse({ message: selectedText });
    }
  }
});

// Show spinner while processing if the message is "showSpinner"
chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.message === "showSpinner") {
    const spinner = document.createElement("div");
    spinner.id = "spinner";
    spinner.style.cssText = `
      position: fixed;
      z-index: 9999;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin: -50px 0 0 -50px;
      border-radius: 50%;
      border: 10px solid #f3f3f3;
      border-top: 10px solid #3498db;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    `;
    document.body.appendChild(spinner);
  }
});

// Hide spinner after processing
chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.message === "hideSpinner") {
    const spinner = document.getElementById("spinner");
    if (spinner) {
      spinner.remove();
    }
  }
});
