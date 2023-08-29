type Fn = (...params: Array<number>) => Promise<string | number>;

function timeLimit(fn: Fn, t: number): Fn {
    return (...args) =>
        new Promise((res, rej) => {
            setTimeout(() => rej("Time Limit Exceeded"), t);
            fn.apply(this, args).then(res).catch(rej);
        });
}

const fn = (t: number) =>
    new Promise<number>((res) => setTimeout(() => res(t), t));
const limited = timeLimit(fn, 100);

limited(99).then(console.log).catch(console.log);
