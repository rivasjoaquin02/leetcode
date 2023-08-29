type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
    let wasCalled = false;
    return function (...args) {
        if (!wasCalled) {
            wasCalled = true;
            return fn(...args);
        }
    };
}

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); //6
console.log(onceFn(2, 3, 6)); //6

onceFn(2, 3, 6); // returns undefined without calling fn
