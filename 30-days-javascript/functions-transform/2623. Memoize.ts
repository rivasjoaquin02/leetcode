type Fn<T, U> = (...params: T[]) => U;

function memoize<T, U>(fn: Fn<T, U>): Fn<T, U> {
    const cache: Record<string, U> = {};

    return function (...args): U {
        const key = `${args}`;
        if (cache.hasOwnProperty(key)) return cache[key];
        return (cache[key] = fn(...args));
    };
}

let callCount = 0;
const memoizedFn = memoize(function (a: number, b: number) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); //5
console.log(memoizedFn(2, 3)); //5
console.log(memoizedFn(2, 7)); //5
console.log(callCount); // 1
