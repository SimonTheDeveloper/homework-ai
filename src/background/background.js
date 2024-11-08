console.log("Background service worker running!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startHelper") {
        console.log("Starting the homework helper...");
        // Add logic to activate the helper
    } else if (message.action === "stopHelper") {
        console.log("Stopping the homework helper...");
        // Add logic to deactivate the helper
    }
});

