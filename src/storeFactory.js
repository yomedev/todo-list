
const storeFactory = (s = []) => {
    const store = s.length > 0 ? s.map((item, index) => ({ id: index, value: item })) : [];

    const addToStore = (task) => {
        store.push({ id: store.length, value: task });
    }

    const getStore = () => [...store];

    const getItemByIndex = (i) => store[i];

    const getItemValueByIndex = (i) => store[i].value;

    const changeItemValue = (i, task) => {
        store[i].value = task;
    }

    const removeFromStore = (i) => {
        store.splice(i, 1);
        store.forEach((elem, index) => {
            elem.id = index;
        });
    }

    return { addToStore, getItemByIndex, getItemValueByIndex, changeItemValue, getStore, removeFromStore };
}

export default storeFactory;