type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    let value: number = init;
    for (let i = 0; i < nums.length; i++) value = fn(value, nums[i]);
    return value;
}

console.log(
    reduce(
        [1, 2, 3, 4],
        function sum(accum, curr) {
            return accum + curr;
        },
        0
    )
);
