const storeFactory = (storeArg = []) => {
    const store = storeArg.length ? storeArg.map((item, index) => ({ id: index, value: item })) : [];

    const addItem = item => ({ ...store[store.push({ id: store.length, value: item }) - 1] });

    const getStore = () => [...store];

    const cloneStore = () => storeFactory(storeArg);

    const getItemByIndex = index => ({ ...store[index] });

    const getItemValueByIndex = index => ({ ...store[index].value });

    const changeItemValue = (index, value) => {
        store[index].value = value;
        return { ...store[index] };
    }

    const removeItem = index => {
        const removed = store.splice(index, 1)[0];
        store.forEach((elem, i) => {
            elem.id = i;
        });
        return removed;
    }

    const getSize = () => store.length;

    return { addItem, getStore, cloneStore, getItemByIndex, getItemValueByIndex, changeItemValue, removeItem, getSize };
}

export default storeFactory;