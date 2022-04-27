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

    const setProp = (prop, value) => {
        element[prop] = value;
    };

    const addContent = (content) => {
        element.textContent = content;
    }


    const giveAttr = (name, value) => {
        element.setAttribute(name, value);
    }

    const attachListener = (type, callback) => {
        element.addEventListener(type, callback);
    }

    return { addClass, addToElement, getElement, addContent, giveAttr, attachListener, setProp };
}

export default DOMElementFactory;