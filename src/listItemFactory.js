import { createTextElem, createButtonElem, createCheckInputElem, createDateInputElem, createTextInputElem, createDelButton } from './Components.js'

const listItemFactory = (task) => {
    const item = document.createElement('li');
    item.classList.add('flex', 'flex-col', 'border-2', 'border-white', 'space-y-1', 'p-2');
    item.setAttribute('data-index', task.id);

    const getDemoItem = () => {
        item.classList.add('hover:p-3', 'hover:ease-in', 'duration-300');
        item.append(createTextElem(task.value.getTitle()),
            createTextElem(task.value.getDay(), 'text-sm', 'text-gray-500'),
            createDelButton());
        return item;
    }

    const getEditItem = () => {
        item.append(createTextInputElem('Title', task.value.getTitle(), 'editTitle'),
            createTextInputElem('Description', task.value.getDesc(), 'editDesc'),
            createDateInputElem(task.value.getDate(), 'editDueDate'),
            createCheckInputElem(task.value.getIsPrior(), 'editPrior'),
            createButtonElem('Save', 'saveBtn'));

        return item;
    }

    return { getDemoItem, getEditItem }
}

export default listItemFactory;