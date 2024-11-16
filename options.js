document.addEventListener("DOMContentLoaded", async function () {
  const apiKeyInput = document.getElementById("apiKeyInput");
  const savedApiKey = await chrome.storage.sync.get("openAiKey");
  if (savedApiKey) {
    apiKeyInput.value = savedApiKey.openAiKey;
  }

  document.getElementById("save").addEventListener("click", function () {
    const apiKey = apiKeyInput.value;
    chrome.storage.sync.set({ openAiKey: apiKey }, function () {
      alert("API Key saved!");
    });
  });
});
