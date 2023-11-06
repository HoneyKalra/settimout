
   
const printNumsSetTimout = (from, to) => {
    let count = from;
    const callagain = () => {
        console.log(count);
        if (count < to) {
            count++;
            setTimeout(callagain, 1000);
        }
    };
    setTimeout(callagain, 1000);
};


const printNumbersInterval = (from, to) => {
    let count = from;
    const runThisFunc = () => {
        console.log(count);
        if (count < to) {
            count++;
        } else {
            clearInterval(timerId);
        }
    };
    const timerId = setInterval(runThisFunc, 1000);
}

printNumbersInterval(1,15)