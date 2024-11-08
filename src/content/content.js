const analyzeForm = () => {
    const forms = document.querySelectorAll('form');
    if (forms.length === 0) {
        console.log('No forms found.');
        return;
    }

    forms.forEach((form, index) => {
        console.log(`Form #${index + 1}:`);
        const fields = form.querySelectorAll('input, textarea, select');
        fields.forEach((field) => {
            console.log({
                name: field.name,
                type: field.type || field.tagName.toLowerCase(),
                placeholder: field.placeholder,
                id: field.id,
            });
        });
    });
};

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