import storeFactory from "./storeFactory";

const projectFactory = (title = '', taskStore = storeFactory()) => {

    const getTitle = () => title;

    const getTaskStore = () => taskStore.cloneStore();

    const changeTitle = titleArg => {
        title = titleArg;
        return title;
    }

    const addTask = task => taskStore.addItemToStore(task);

    return { getTitle, getTaskStore, changeTitle, addTask };
}

export default projectFactory;