const createTextElem = (text, ...classList) => {
    const textElem = document.createElement('p');
    textElem.classList.add(...classList);
    textElem.textContent = text;

    return textElem;
}

const createTextInputElem = (placeholder, value) => {
    const input = document.createElement('input');
    input.classList.add('px-1', 'bg-indigo-100', 'focus:outline-none');
    input.type = 'text';
    input.placeholder = placeholder;
    input.value = value;

    return input;
}

const createDateInputElem = (value) => {
    const input = document.createElement('input');
    input.classList.add('bg-indigo-100', 'w-1/2', 'focus:outline-none');
    input.type = 'date';
    input.valueAsDate = value;

    return input;
}

const createCheckInputElem = (checked) => {
    const input = document.createElement('input');
    input.classList.add('w-5', 'h-5')
    input.type = 'checkbox';
    input.checked = checked;

    return input;
}

const createButtonElem = (text) => {
    const button = document.createElement('button');
    button.classList.add('p-1', 'w-1/2', 'bg-indigo-300', 'disabled:opacity-75');
    button.disabled = true;
    button.textContent = text;

    return button;
}

export { createTextElem, createTextInputElem, createDateInputElem, createCheckInputElem, createButtonElem };