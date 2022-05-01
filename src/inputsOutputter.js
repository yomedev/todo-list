const inputsOutputter = () => {

    const getTitleValue = () => inputTextOutputter('title').getText();

    const getDescValue = () => inputTextOutputter('desc').getText();

    const getDateValue = () => inputDateOutputter().getDate();

    const getPriorValue = () => inputCheckOutputter().getCheck();

    const getProjectValue = () => inputSelectOutputter();

    return { getTitleValue, getDescValue, getDateValue, getPriorValue, getProjectValue };
}

const inputTextOutputter = (id) => {
    const input = document.getElementById(id);
    const value = input.value;
    input.value = '';
    const getText = () => value;
    return { getText };
}

const inputDateOutputter = () => {
    const input = document.getElementById('dueDate');
    const value = new Date(input.valueAsDate);
    input.valueAsDate = new Date();
    const getDate = () => value;
    return { getDate };
}

function inputCheckOutputter() {
    const input = document.getElementById('isPrioritized');
    const value = input.checked;
    input.checked = false;
    const getCheck = () => value;
    return { getCheck };
}

const inputSelectOutputter = () => {
    const select = document.getElementById('projSelecter');
    const getProject = () => select.value;
    return { getProject };
}

export { inputsOutputter };