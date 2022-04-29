
const taskFactory = (title, desc, date, isPrior) => {
    const getTitle = () => title;

    const getDesc = () => desc;

    const getDate = () => date;

    const getDay = () => date.toLocaleDateString('en-US', { weekday: 'short', });

    const getIsPrior = () => isPrior;

    const cloneTask = () => taskFactory(title, desc, date, isPrior);

    const changeTitle = (t) => {
        title = t;
        return title;
    }
    const changeDesc = (d) => {
        desc = d;
    }
    const changeDate = (d) => {
        date = d;
    }
    const changePrior = (p) => {
        isPrior = p;
    }
    

    return { getTitle, getDesc, getDate, getDay, getIsPrior , changeDate, changeDesc, changePrior, changeTitle, cloneTask};
}

export default taskFactory;