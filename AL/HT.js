/* ==========739. Daily Temperatures==========*/
let temp = [73, 74, 75, 71, 69, 72, 76, 73]

var dailyTemperatures = function(temp) {
    let res = [], len=temp.length;

    for (let i=0; i<len; i++) {
        let day = 0;
        for (let j=i+1; j<len; j++) {
            if (temp[j] > temp[i]) {
                day = j - i;
                break;
            }
        }
        res.push(day);
    }

    console.log(res);
    return res
};


// dailyTemperatures(temp)
/* ==========739. Daily Temperatures==========*/

/* ==========508. Most Frequent Subtree Sum==========*/
var tree508 = {
    val: 5,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: -3,
        left:  null,
        right: null
    }
}

var findFrequentTreeSum = function(root) {
    let hash = {}, res = [], max = 1;
    if (root === null)return res;
    dfs(root);
    console.log(hash)
    for (let i in hash) {
        max = Math.max(hash[i], max);
    }
    
    for (let i in hash) {
        if (hash[i] === max) res.push(parseInt(i))
    }
    console.log(res)
    return res
    
    function dfs (node) {
        if (node === null) return 0
        const sum = node.val + dfs(node.left) + dfs(node.right)
        hash[sum] ? hash[sum]++ : hash[sum] = 1
        return sum
    }
};

// findFrequentTreeSum(tree508)
/* ==========508. Most Frequent Subtree Sum==========*/



/* ==========554. Brick Wall==========*/
// const wall = [
//     [1,2,2,1],
//     [3,1,2],
//     [1,3,2],
//     [2,4],
//     [3,1,2],
//     [1,3,1,1]]
// const wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]];
const wall = [[1,1],[2],[1,1]];
// const wall = [[1], [1], [1]];

var leastBricks = function(wall) {
    let hash = {}, res = 0, clen = wall.length, rlen = wall[0].reduce((a, b) => a + b );

    if (clen === 0) return res
    if (rlen === 1) return clen

    wall.forEach((v,i) => {
        let count = 0;
        wall[i].forEach((v,i) => {
            count += v
            if (count !== rlen) {
                hash[count] ? hash[count]++ : hash[count] = 1
            }
        })
    })

    Object.keys(hash).forEach((v,i) => {
        res = Math.max(hash[v], res)
    })

    return clen - res
};

// leastBricks(wall)
/* ==========554. Brick Wall==========*/



/* ==========648. Replace Words==========*/
// var dict = ["cat", "bat", "rat"];
// var sentence = "the cattle was rattled by the battery";
var dict = ["a","b","c"];
var sentence = "aadsfasf absbs bbab cadsfafs";

var replaceWords = function(dict, sentence) {
    let sent = sentence.split(' ');

    sent.forEach((v,i) => {
        let root = '';
        for (let r of dict) {
            if (sent[i].startsWith(r)) {
                if (root === '') root = r
                else root.length <= r.length ? null : root = r;
            }
        }
        if(root !== '') sent[i] = root;
    })

    return sent.join(" ")
};

// replaceWords(dict, sentence);
/* ==========648. Replace Words==========*/

/* ==========692. Top K Frequent Words==========*/
var words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2;

var topKFrequent = function(words, k) {
    var hash = {}, res = [];

    words.forEach((v,i) => {
        hash[words[i]] ? hash[words[i]]++ : hash[words[i]] = 1;
    })

    res = Object.keys(hash).sort((a, b) => {
        if (hash[a] - hash[b] === 0) {
            if (a < b) return -1
            else return 1
        } else return hash[b] - hash[a]
    })

    return res.slice(0, k);
};

// topKFrequent(words, k)
/* ==========692. Top K Frequent Words==========*/


/* ==========200. Number of Islands==========*/
// var grid = [
//     [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1],
// ];

// var grid = [
//     [1,1,0],
//     [1,1,0],
//     [0,0,1],
// ];
var grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]


var numIslands = function(grid) {
    let pass = [], res = []; 

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                if (pass.indexOf('' + i + j) > -1) continue;
                else {
                    var island = [];
                    dfs(i, j);
                    res.push(island)
                }
            }
        }
    }

    console.log(res)
    return res.length
    
    function dfs (r, c) {
        if (r < 0 || c < 0)return;
        if (r >= grid.length || c >= grid[0].length)return;
        if (grid[r][c] === '0') return;
        if (pass.indexOf('' + r + c) > -1) return;
        island.push([r, c]);
        pass.push('' + r + c);
        dfs(r-1, c);
        dfs(r, c-1);
        dfs(r+1, c);
        dfs(r, c+1);
    }
};

// numIslands(grid)
/* ==========200. Number of Islands==========*/


/* ==========694. Number of Distinct Islands==========*/
// var grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
var grid = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','0','1','1'],
    ['0','0','0','1','1'],
];


var numIslands = function(grid) {
    let pass = [], res = new Set(); 

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                if (pass.indexOf('' + i + j) > -1) continue;
                else {
                    var island = '';
                    dfs(i, j, i, j);
                    res.add(island)
                }
            }
        }
    }

    console.log(res.size)
    return res.size
    
    function dfs (r, c, startR, startC) {
        if (r < 0 || c < 0)return;
        if (r >= grid.length || c >= grid[0].length)return;
        if (grid[r][c] === '0') return;
        if (pass.indexOf('' + r + c) > -1) return;
        island += ('' + (r-startR) + (c-startC));
        pass.push('' + r + c);
        dfs(r-1, c, startR, startC);
        dfs(r, c-1, startR, startC);
        dfs(r+1, c, startR, startC);
        dfs(r, c+1, startR, startC);
    }
};

// numIslands(grid)
/* ==========694. Number of Distinct Islands==========*/


/* ==========694. Group Shifted Strings==========*/
let str = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
// str = ['a', 'b', 'z']

var groupStrings = function (str) {
    var res = [], hash = {};

    for (let v of str) {
        let diff = countDiff(v);
        !hash[diff] ? hash[diff] = [v] : hash[diff].push(v)
    }
    for (let i in hash) {
        res.push(hash[i])
    }
    console.log(res)

    function countDiff (str) {
        let key = '0';
        for (let j = 0; j < str.length-1; j++) {
            let temp = str.charCodeAt(j) - str.charCodeAt(j+1);
            temp < 0 ? temp += 26 : null;
            key += temp.toString()
        }
        return key
    }
}

groupStrings(str)

/* ==========694. Group Shifted Strings==========*/

