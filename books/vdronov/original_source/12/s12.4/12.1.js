function* fibonacci(cnt) {
    let i = 0, current, pprev, prev;
    while (i < cnt) {
        if (i <= 1)
            current = i;
        else
            current = pprev + prev;
        [pprev, prev] = [prev, current];
        i++;
        yield current;
    }
}
