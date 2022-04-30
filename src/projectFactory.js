import taskStoreFactory from "./taskStoreFactory";

const projectFactory = (title, store = taskStoreFactory()) => {
    const getTitle = () => title;
    const getTaskStore = () => store;
    const changeTitle = (t) => {
        title = t;
    }
    const addTask = (task) => {
        store.addToStore(task);
    }

    return {getTitle, getTaskStore, changeTitle, addTask};
}

export default projectFactory;