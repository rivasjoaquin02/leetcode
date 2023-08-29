function cancellable(fn: Function, args: any[], t: number): Function {
    fn.apply(this, args);
    const intervalId = setInterval(fn, t, ...args);
    return () => clearInterval(intervalId);
}

const result = [];

// const fn = (x: number) => x * 2;
const fn = (x1: number, x2: number) => x1 * x2;

// const args = [4],
//     t = 35,
//     cancelT = 190;
const args = [2, 5],
    t = 30,
    cancelT = 165;

const start = performance.now();

const log = (...args) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...args) });
};

const cancel = cancellable(log, args, t);

setTimeout(() => {
    cancel();
}, cancelT);

setTimeout(() => {
    console.log(result); // [
    //      {"time":0,"returned":8},
    //      {"time":35,"returned":8},
    //      {"time":70,"returned":8},
    //      {"time":105,"returned":8},
    //      {"time":140,"returned":8},
    //      {"time":175,"returned":8}
    //  ]
}, cancelT + t + 15);
