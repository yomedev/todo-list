import { createTextElem, createButtonElem, createCheckInputElem, createDateInputElem, createTextInputElem } from './Components.js'

const listItemFactory = (task) => {
    const item = document.createElement('li');
    item.classList.add('flex', 'flex-col', 'border-2', 'border-white', 'space-y-1', 'p-2');
    item.setAttribute('data-index', task.id);

    const getDemoItem = () => {
        item.classList.add('hover:p-3', 'hover:ease-in', 'duration-300');

        item.append( createTextElem(task.value.getTitle()),
            createTextElem(task.value.getDay(), 'text-sm', 'text-gray-500') );

        return item;
    }

    const getEditItem = () => {
        item.append( createTextInputElem('Title', task.value.getTitle()),
            createTextInputElem('Description', task.value.getDesc()),
            createDateInputElem(task.value.getDate()),
            createCheckInputElem(task.value.getIsPrior()),
            createButtonElem('Save') );
        
        return item;
    }

    return { getDemoItem, getEditItem }
}

export default listItemFactory;