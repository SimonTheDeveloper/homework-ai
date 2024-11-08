document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startHelper").addEventListener("click", () => {
        // Send a message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "analyzeForm" });
        });
    });

    document.getElementById("stopHelper").addEventListener("click", () => {
        console.log("Helper stopped!");
        chrome.runtime.sendMessage({ action: "stopHelper" });
    });
});