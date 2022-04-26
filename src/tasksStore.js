
const storeFactory = (arr = []) => {
    const store = arr;
    const addToStore = (task) => {
        store.push(task);
    }
    const logStore = () => {
        store.forEach(item => {
            console.log('---------------');
            item.logTask();
        })
    }
    const getStore = () => [...store];
    const getItemByIndex = (i) => store[i];
    return { addToStore, logStore, getItemByIndex, getStore };
}

export default storeFactory;