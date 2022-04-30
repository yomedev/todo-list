import listItemFactory from "./listItemFactory";

const taskStoreRenderer = (store) => {
    const list = document.getElementById('taskList');
    
    const renderList = () => {
        list.innerHTML = '';
        
        store.getStore().forEach(elem => {
            const item = listItemFactory(elem).getDemoItem();
            list.append(item);
        });
        return list.children;
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

    const removeItem = (item) => {
        list.removeChild(item);
        list.childNodes.forEach((elem, i) => {
            elem.setAttribute('data-index', i);
        });
        return item;
    }

    const getList = () => {
        return list;
    }

    return { renderList, addItem, changeItemToEdit, changeItemToDemo, removeItem, getList };
}

export default taskStoreRenderer;