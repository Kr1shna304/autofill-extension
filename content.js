function selectDropdownOption(inputId, optionTitle, maxRetries = 10, retryDelay = 500) {
    const input = document.getElementById(inputId);
    if (!input) return console.warn("Input not found: " + inputId);

    input.click();

    let attempts = 0;

    const trySelectOption = () => {
        const option = [...document.querySelectorAll("a[title]")]
            .find(el => el.title === optionTitle);

        if (option) {
            option.click();
            console.log(`Selected: ${optionTitle}`);
        } else if (attempts < maxRetries) {
            attempts++;
            console.warn(`Retrying (${attempts}/${maxRetries}) for option: ${optionTitle}`);
            setTimeout(trySelectOption, retryDelay);
        } else {
            console.warn("Option not found after retries: " + optionTitle);
        }
    };

    trySelectOption();
}

const fieldMap = [
  { id: '18:_input', title: 'People First' },
  { id: '22:_input', title: 'No' },
  { id: '35:_input', title: "I do not have a disability"},
  { id: '39:_input', title: 'Not Applicable' },
  { id: '47:_input', title: 'No' },
  { id: '51:_input', title: 'No' },
  { id: '55:_input', title: 'No' },
  { id: '59:_input', title: 'No' },
  { id: '63:_input', title: 'No' },
];

let delay = 0;
for (const field of fieldMap) {
    setTimeout(() => {
        selectDropdownOption(field.id, field.title);
    }, delay);
    delay += 2000;
}
