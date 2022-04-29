const projectStoreFactory = (store = []) => {
    const addToStore = (project) => store.push(project);
    const getStore = () => [...store];
    return { addToStore, getStore };
}

export default projectStoreFactory;