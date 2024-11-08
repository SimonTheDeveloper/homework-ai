// Storage handling logic 
import { analyzeForm } from "./form-detection.js";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "analyzeForm") {
        const formData = analyzeForm();
        console.log("Analyzed Form Data:", formData);
        sendResponse({ formData });
    }
});

const observeDOMChanges = () => {
    const targetNode = document.getElementById('root'); // Monitor the main root element
    if (!targetNode) {
        console.error('Root element not found!');
        return;
    }

    // Create a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(() => {
        console.log('DOM updated, checking for forms...');
        analyzeForm(); // Call the form analysis function
    });

    // Start observing the target node for childList changes
    observer.observe(targetNode, { childList: true, subtree: true });
};

// Initialize the observer on page load
observeDOMChanges();