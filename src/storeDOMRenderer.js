import listItemFactory from "./listItemFactory";

const storeDOMRenderer = (store) => {
    const list = document.getElementById('taskList');
    list.p
    const renderList = () => {
        list.innerHTML = '';
        store.getStore().forEach(elem => {
            const item = listItemFactory(elem).getDemoItem();
            list.append(item);
        });
        return list.childNodes;
    }

    const changeItemToEdit = (demo) => {
        const index = demo.getAttribute('data-index');
        const task = store.getItemByIndex(index);
        const edit = listItemFactory(task).getEditItem();
        list.replaceChild(edit, demo);
        return edit;
    }

    const changeItemToDemo = (edit) => {
        const index = edit.getAttribute('data-index');
        const task = store.getItemByIndex(index);
        const demo = listItemFactory(task).getDemoItem();
        list.replaceChild(demo, edit);
        return demo;
    }

    const addItem = (task) => {
        const item = listItemFactory(task).getDemoItem();
        list.append(item);
        return item;
    }

    const changeItemValue = (item, task) => {
        
    }


    return { renderList, addItem, changeItemToEdit, changeItemToDemo };
}

export default storeDOMRenderer;