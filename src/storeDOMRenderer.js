import listItemFactory from "./listItemFactory";

const storeDOMRenderer = (store) => {
    const list = document.getElementById('taskList');

    const renderList = () => {
        list.innerHTML = '';
        store.getStore().forEach(elem => {
            const item = listItemFactory(elem).getDemoItem();
            list.append(item);
        });
        return list.childNodes;
    }

    const replaceItem = (newItem, oldItem) => {
        list.replaceChild(newItem, oldItem);
    }

    const addItem = (newItem) => {
        list.append(listItemFactory(newItem).getDemoItem());
    }

    return { renderList, addItem, replaceItem };
}

export default storeDOMRenderer;