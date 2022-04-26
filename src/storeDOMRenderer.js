import DOMElementFactory from "./DOMElementFactory";

const storeDOMRenderer = (store) => {
    const list = document.getElementById('taskList');

    const renderDOM = () => {
        list.innerHTML = '';
        store.getStore().forEach(element => {
            const item = DOMElementFactory('li', ['flex', 'flex-col', 'justify-between', 'border-2', 'border-white', 'px-3', 'mb-1', 'hover:px-4', 'hover:py-1', 'hover:ease-in', 'duration-300']);
            const title = DOMElementFactory('p', ['text-lg']);
            title.addContent(element.getTitle());;
            item.addToElement(title.getElement());
            const date = DOMElementFactory('p', ['text-sm', 'text-gray-500']);
            date.addContent(element.getDate());
            item.addToElement(date.getElement());
            list.append(item.getElement());
        });
    }

    return { renderDOM };
}

export default storeDOMRenderer;