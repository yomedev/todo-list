
const taskFactory = (title, desc, date, isPrior) => {
    const getTitle = () => title;

    const getDesc = () => desc;

    const getDate = () => date;


    const getDay = () => date.toLocaleDateString('en-US', { weekday: 'short', });


    const getIsPrior = () => isPrior;

    // const getTask = () => ({ title, desc, date, isPrior });

    const logTask = () => {
        console.log(`title: ${title}`);
        console.log(`desc: ${desc}`);
        console.log(`date: ${date}`);
        console.log(`isPrior: ${isPrior}`);
    }

    return { getTitle, getDesc, getDate, getDay, getIsPrior, logTask };
}

export default taskFactory;