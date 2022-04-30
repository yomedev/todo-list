const projectStoreFactory = (s = []) => {
    const store = s.length > 0 ? s.map((item, index) => ({id: index, value: item})) : [];
    const addToStore = (project) => store[store.push({id: store.length, value: project}) - 1];
    const getStore = () => store;
    const getItemByIndex = (index) => store[index];
    const getItemValueByIndex = (index) => store[index].value;
    return { addToStore, getStore, getItemByIndex, getItemValueByIndex };
}

export default projectStoreFactory;