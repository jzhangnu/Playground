/**
*   Given this endorsements array, structure the data to result in the following
*   rank in descending order
*/
/**
var endorsements = [
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' }, 
  { skill: 'css', user: 'Bill' },
  { skill: 'html', user: 'Sue' },
];
  
// Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 }
];
*/

var endorsements = [
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' }, 
    { skill: 'css', user: 'Bill' },
    { skill: 'html', user: 'Sue' },
  ];

var processArray = function (arr) {
    let hash = {},
        res = [];

    for (let endor of arr) {
        if(!hash[endor.skill])hash[endor.skill] = [endor.user];
        else hash[endor.skill].push(endor.user);
    }

    for (let key of Object.keys(hash)) {
        const obj = {
            skill: key,
            user: hash[key],
            count: hash[key].length
        }
        res.push(obj)
    }

    res = res.sort((a, b) => {
        return b.count - a.count
    })

    console.log(res)
}

// processArray(endorsements)


// Event Loop, macroTask & microTask (Promise)
var a = () => console.log('a');
var b = () => setTimeout(() => console.log("b"), 0);
var c = new Promise( (resolve, reject) => resolve('c'));


a();
b();
setTimeout(() => c.then(data => console.log(data)), 0)
// abc

// 优先级 process.nextTick > Promise

c.then(data => console.log(data));
b();
setTimeout(() => a(), 0)
// cba

// setTimeout(() => {
// 	console.log(2)
// }, 2)

// setTimeout(() => {
// 	console.log(1)
// }, 1)

// setTimeout(() => {
// 	console.log(0)
// }, 0)
// // 4ms
