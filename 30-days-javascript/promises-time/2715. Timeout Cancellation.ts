function cancellable(fn: Function, args: number[], t: number): Function {
    const timeoutId = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timeoutId);
}

type Result = { time: number; returned: number };
const result = [] as Result[];

// const fn = (x: number) => x * 5;
const fn = (x1: number, x2: number) => x1 * x2;

// const args = [2],
//     t = 20,
//     cancelT = 50;
const args = [2, 4],
    t = 30,
    cancelT = 100;

const start = performance.now();
const log = (...argsArr: number[]): void => {
    const diff = Math.floor(performance.now() - start);
    result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT);

setTimeout(() => {
    cancel();
}, cancelT);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
