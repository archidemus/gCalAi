chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generate-calendar-event",
    title: "Generate Google Calendar Event",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generate-calendar-event") {
    chrome.tabs.sendMessage(
      tab.id,
      { message: "copyText" },
      async (response) => {
        const textToCopy = response?.message;
        if (textToCopy) {
          // Show spinner while processing
          chrome.tabs.sendMessage(tab.id, {
            message: "showSpinner",
          });
          await createEventWithChatGPT(response.message, tab);
          // Hide spinner after processing
          chrome.tabs.sendMessage(tab.id, {
            message: "hideSpinner",
          });
        }
      }
    );
  }
});

async function fetchOpenAi(apiKey, prompt) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${apiKey}`);

  const raw = JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that responds only links",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    requestOptions
  );
  return response.json();
}

async function createEventWithChatGPT(text, tab) {
  const data = await chrome.storage.sync.get("openAiKey");

  const apiKey = data?.openAiKey;
  if (!apiKey) {
    console.error("API Key not found. Please set it in options.");
    return;
  }
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = new Date().toLocaleDateString();
  const prompt = `Create a Google Calendar link to create a new event with title, description, time and date based on the context (the local timezone is ${localTimezone}, today is ${localDate}) following text:

  ${text}`;
  const jsonResponse = await fetchOpenAi(apiKey, prompt);
  const textResponse = String(jsonResponse.choices[0].message.content);
  // Extract the link from the response.
  const link = textResponse.match(/https?:\/\/[^\s]+/)?.[0];
  if (!link) {
    console.error(`Link not found in response. ${responseText}`);
    return;
  }
  chrome.tabs.create({ url: link });
}
