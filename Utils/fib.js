function fib (n) {
    if (n < 0) {
        throw new Error("Index was negative");
    } else if (n === 0 || n === 1) {
        return n;
    }

    let prevPrev = 0;
    let prev = 1;
    let current;

    for (let i=1; i<n; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}