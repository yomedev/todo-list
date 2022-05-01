const inputsOutputter = () => {
    const title = inputTextOutputter('title').getText();
    const desc = inputTextOutputter('desc').getText();
    const date = inputDateOutputter().getDate();
    const isPrior = inputCheckOutputter().getCheck();

    const getTitleValue = () => title;

    const getDescValue = () => desc;

    const getDateValue = () => date;

    const getPriorValue = () => isPrior;

    const getProjectValue = () => inputSelectOutputter();

    const getTask = () => ({title, desc, date, isPrior});

    return { getTitleValue, getDescValue, getDateValue, getPriorValue, getProjectValue, getTask };
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