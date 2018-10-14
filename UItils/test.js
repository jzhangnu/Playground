function realSum(a, b, c) {
    console.log(a + b + c);
    return a + b;
};

var curry = function (fn) {
    return function (a) {
        return function (b) {
            fn (a, b)
        }
    }
}

var curAdd1 = curry(realSum, 4);

var curAdd2 = curry(curAdd1, 5);

curAdd2(11)
