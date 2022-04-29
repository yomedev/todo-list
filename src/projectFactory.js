const projectFactory = (title, store = []) => {
    const getTitle = () => title;
    const getTasks = () => [...store];
    const changeTitle = (t) => {
        title = t;
    }
    const addTask = (task) => {
        store.addToStore(task);
    }

    return {getTitle, getTasks, changeTitle, addTask};
}

export default projectFactory;