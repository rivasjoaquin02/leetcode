type Fn<T, U> = (param: T) => U;

function applyAsync<T, U>(acc: Promise<T>, callback: Fn<T, U>) {
    return acc.then(callback);
}

function composeAsync<T, U>(...funcs: Fn<T, U>[]) {
    return (x: T) => funcs.reduce(applyAsync, Promise.resolve(x));
}
