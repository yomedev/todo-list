
const taskFactory = (title, desc, date, isPrior) => {
    const getTitle = () => {
        return title;
    }
    const getDesc = () => {
        return desc;
    }
    const getDate = () => {
        return date;
    }

    const getIsPrior = () => {
        return isPrior;
    }

    const logTask = () => {
        console.log(`title: ${title}`);
        console.log(`desc: ${desc}`);
        console.log(`date: ${date}`);
        console.log(`isPrior: ${isPrior}`);
    }

    return {getTitle, getDesc, getDate, getIsPrior, logTask};
}

export default taskFactory;