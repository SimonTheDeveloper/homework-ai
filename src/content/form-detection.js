// Form detection logic 
export const analyzeForm = () => {
    const forms = document.querySelectorAll("form");
    const data = [];
    forms.forEach((form) => {
        const fields = form.querySelectorAll("input, textarea, select");
        const formFields = [];
        fields.forEach((field) => {
            formFields.push({
                tagName: field.tagName.toLowerCase(),
                type: field.getAttribute("type") || "text",
                name: field.getAttribute("name"),
                placeholder: field.getAttribute("placeholder"),
                id: field.id,
                value: field.value,
            });
        });
        data.push(formFields);
    });
    return data;
};
