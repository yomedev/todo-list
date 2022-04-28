
const storeFactory = (s = []) => {
    const store = s.length > 0 ? s.map((item, index) => ({ id: index, value: item })) : [];

    const addToStore = (task) => {
        store.push({ id: store.length, value: task });
        return store[store.length - 1];
    }

    const getStore = () => [...store];

    const getItemByIndex = (i) => store[i];

    const getItemValueByIndex = (i) => store[i].value;

    const changeItemValue = (i, task) => {
        store[i].value = task;
    }

    const removeFromStore = (i) => {
        const removed = store.splice(i, 1)[0];
        store.forEach((elem, index) => {
            elem.id = index;
        });
        return removed;
    }

    return { addToStore, getItemByIndex, getItemValueByIndex, changeItemValue, getStore, removeFromStore };
}

export default storeFactory;