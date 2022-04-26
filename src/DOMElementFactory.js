const DOMElementFactory = (tag = 'div', classList = []) => {
    const element = document.createElement(tag);
    classList.forEach(item => {
        element.classList.add(item);
    });
    const addClass = (className) => {
        element.classList.add(className);
    }
    const addToElement = (elem) => {
        element.append(elem);
    }
    const getElement = () => element;

    const addContent = (content) => {
        element.textContent = content;
    }

    return { addClass, addToElement, getElement, addContent };
}

export default DOMElementFactory;