
class TimeLimitedCache {
    cache = {};

    constructor() {}

    set(key: number, value: number, duration: number): boolean {
        if (this.cache[key]) 
            this.cache[key].duration
    }

    get(key: number): number {}

    count(): number {}
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
