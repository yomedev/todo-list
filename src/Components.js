const createTextElem = (text, ...classList) => {
    const textElem = document.createElement('p');
    textElem.classList.add(...classList);
    textElem.textContent = text;

    return textElem;
}

const createTextInputElem = (placeholder, value, id) => {
    const input = document.createElement('input');
    input.classList.add('px-1', 'bg-indigo-100', 'focus:outline-none');
    input.setAttribute('id', id);
    input.type = 'text';
    input.placeholder = placeholder;
    input.value = value;

    return input;
}

const createDateInputElem = (value, id) => {
    const input = document.createElement('input');
    input.classList.add('bg-indigo-100', 'w-1/2', 'focus:outline-none');
    input.setAttribute('id', id);
    input.type = 'date';
    input.valueAsDate = value;

    return input;
}

const createCheckInputElem = (checked, id) => {
    const input = document.createElement('input');
    input.classList.add('w-5', 'h-5');
    input.setAttribute('id', id);
    input.type = 'checkbox';
    input.checked = checked;

    return input;
}

const createButtonElem = (text, id) => {
    const button = document.createElement('button');
    button.type = 'button'
    button.classList.add('p-1', 'w-1/2', 'bg-indigo-300');
    button.setAttribute('id', id);
    button.disabled = true;
    button.textContent = text;

    return button;
}

const createDelButton = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('p-1', 'w-1/2', 'bg-red-300');
    button.setAttribute('id', 'delBtn');
    button.textContent = "Delete";
    return button;
}

const createSelect = () => {
    const select = document.createElement('select');
    
}

export { createTextElem, createTextInputElem, createDateInputElem, createCheckInputElem, createButtonElem, createDelButton };