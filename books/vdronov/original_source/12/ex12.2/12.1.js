function fibonacci(cnt) {
    return {
        [Symbol.iterator]() {
            let i = 0, current, pprev, prev;
            return {
                next() {
                    if (i < cnt) {
                        if (i <= 1)
                            current = i;
                        else
                            current = pprev + prev;
                        [pprev, prev] = [prev, current];
                        i++;
                        return { value: current};
                    } else
                        return { done: true };
                }
            };
        }
    };
}
