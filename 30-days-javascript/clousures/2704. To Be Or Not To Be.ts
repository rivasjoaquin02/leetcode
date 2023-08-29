type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(value: any): ToBeOrNotToBe {
    return {
        toBe(val: any) {
            if (val !== value) throw new Error("Not Equal");
            return true;
        },
        notToBe(val: any) {
            if (val === value) throw new Error("Equal");
            return true;
        },
    };
}

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
