type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x: number): number {
        let value = x;
        for (let i = functions.length - 1; i >= 0; i--)
            value = functions[i](value);
        return value;
    };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
