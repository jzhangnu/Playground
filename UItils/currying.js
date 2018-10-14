// !!!!!!!currying is the process of breaking down a function 
// into a series of functions that each take a single argument.
function realSum(a, b) {
    console.log(a + b);
    return a + b;
};
  
function sum(a, b) {
    return b ?
        realSum(a, b) :
        function(b) {
            // This anonymous function has access to variable `a` via closure
            return realSum(a, b);
        }
}

var add = function (x) {
    return function (y) {
        return x + y
    }
}

addTen = add(10);
addTwo = add(2)

const compose = function (f, g) {
    return function (x) {
        return f(g(x))
    }
}
// 合成2个函数，前提是f，g都只能接受一个参数。
// 柯里化就是把一个多参数函数，转化成单参数函数。
// 参数复用。本质上是降低通用性，提高适用性。
function realSum(a, b) {
    console.log(a + b);
    return a + b;
  };

  var curry = function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var afterArgs = Array.prototype.slice.call(arguments, 0);
        return fn.apply(this, args.concat(afterArgs))
    }
}

var curAdd = curry(realSum, 4);

curAdd(5)

var sequence = function (start, end) {
    var res = [];

    for (var i = start; i <= end; i++) {
        res.push(i);
    }
    console.log(res)
    return res
}

var seq5 = curry(sequence, 1);
seq5(10)

var arrow_currying = n => m => fn(n,m);

// Function.prototype.bind() is currying
// redux connect is currying
// Event Handling
const handleChange = (fieldName) => (event) => {
    saveField(fieldName, event.target.value)
  }
<input type="text" onChange={handleChange('email')} />

curry = f => a => b => f(a, b)
uncurry = f => (a, b) => f(a)(b)

add = (a, b) => a + b
curriedAdd = a => b => a + b

add(5,6) === 11
curriedAdd(5)(6) === 11

uncurry(curry(add))(5,6) === 11
curry(uncurry(curriedAdd))(5)(6) === 11

function curry(fn) {
    return (x) => {
        return (y) => {
            return (z) => {
                return fn(x, y, z);
            };
        };
    };
}

function nest(fn, i, args) {
    return (x) => {
        args.push(x);
        if (i === fn.length) {
            return fn(...args);
        }
        return nest(fn, i + 1, args);
    };
}

function curry(fn) {
    if (fn.length === 0) {
        return fn;
    }
    const args = [];
    return nest(fn, 1, args);
}

// 合在一起
function curry(fn) {
    if (fn.length === 0) {
      return fn;
    }
    const args = [];
    function nest(i) {
      return (x) => {
        args.push(x);
        if (i === fn.length) {
          return fn(...args);
        }
        return nest(i + 1);
      };
    }
    return nest(1);
}

function callLater(fn, ...params) {
    return (...xs) => {
      const args = params.concat(xs);
  
      // empty invocation just 'return callLater(fn,...args);'
      // if (xs.length === 0) {
      //   throw Error('EMPTY INVOCATION');
      // }
      if (args.length >= fn.length) {
        return fn(...args);
      }
      return callLater(fn,...args);
    };
}


const log1 = curry((x) => console.log(x));
log1(10); // 10
const log2 = curry((x, y) => console.log(x, y));
log2(10)(20); // 10 20