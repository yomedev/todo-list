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

const createCloseButton = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('p-1', 'w-1/2', 'bg-green-300');
    button.setAttribute('id', 'closeBtn');
    button.textContent = "Close";
    return button;
}

const createProjectInput = () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('w-40', 'bg-transparent', 'p-2', 'mr-2', 'text-xl', 'font-bold', 'outline-none', 'hover:bg-indigo-100', 'focus:bg-indigo-100');
    input.setAttribute('id', 'projTitle');
    return input;
}

const createProjectDelBtn = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('p-1', 'w-24', 'bg-red-300', 'text-lg');
    button.setAttribute('id', 'projDel');
    button.textContent = "Delete";
    return button;
}

const createProjectSaveBtn = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('p-1', 'w-16', 'bg-indigo-300', 'text-lg');
    button.setAttribute('id', 'projSave');
    button.textContent = "Save";
    return button;
}

const createProjectCancelBtn = () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('p-1', 'w-16', 'bg-green-300', 'text-lg');
    button.setAttribute('id', 'projCancel');
    button.textContent = "Cancel";
    return button;
}


export { createTextElem, createTextInputElem, createDateInputElem, createCheckInputElem, createButtonElem, createDelButton, createCloseButton, createProjectInput, createProjectDelBtn, createProjectSaveBtn, createProjectCancelBtn };

