// ======================================
// ==========Recursion Solution==========
// ======================================
Promise.all = (ps) => {
    if(ps.length <= 0) return Promise.resolve([]);

    const [head, ...tail] = ps;
    return head.then(result => {
        return Promise.all(tail).then(results => [result, ...results])
    });
};

// ============================
// ==========Counters==========
// ============================
Promise.all = (ps) => new Promise((res, rej) => {
    const len = ps.length;
    var results = [], counter = 0;

    if(ps.length <= 0) return Promise.resolve([]);

    ps.forEach((p, i) => {
        p.then(result => {
            results.push(result);
            if (results.length >= len) return res(results)
        }).catch(rej)
    })
})

// ===================================
// ==========Reduce Solution==========
// ===================================
// Promise.all = (ps) => {
//     const results = [];
  
//     const merged = ps.reduce(
//       (acc, p) => acc.then(() => p).then(r => results.push(r)),
//       Promise.resolve(null));
  
//     return merged.then(() => results);
//   };


// =======================================
// =============Example Test==============
// =======================================
const p1 = Promise.resolve('foo');
const p2 = new Promise((res, rej) => { setTimeout(res, 10000, 'fff') });
const p3 = new Promise((res, rej) => { setTimeout(res, 3000, 'ccc') });

const p1 = fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
const p2 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
var t0 = performance.now();
Promise.all([p1, p2]).then(res => {
    console.log(res);
    var t1 = performance.now();
    console.log(t1-t0)
  }
)

// p2.then(res => {
//     console.log(res);
//     const p3 = new Promise((res, rej) => { setTimeout(res, 3000, 'ccc') });
//     p3.then(re => console.log(re))
// })

Promise.all([p1, p2, p3])
  .then((res) => console.log(res));
// "foo" "bar" "baz"

console.time('tako')
var t0 = performance.now();
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    console.log('t0');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
          console.log('t1')
          var t1 = performance.now();
          console.log(t1-t0)
        }
      )
  }
)