var root1 = {
    val: 1,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

var root2 = {
    val: 1,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

var n1 = {
    val: 1,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

var n2 = {
    val: 1,
    left: {
        val: 2,
        right: null,
        left: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

var n = {
    val: 1,
    left: {
        val: 3,
        right: {
            val: 1,
            left: null,
            right: null
        },
        left: null
    },
    right: {
        val: 3,
        left:  {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    }
}

var maxDepth = function (node) {
    var max = 0;
    if (node !== null) {
        max = helper(node);
    }

    function helper (node) {
        if (node) {
            return 1 + Math.max(helper(node.right), helper(node.left))
        }else return 0

    }

    console.log(max)
    return max
}
// maxDepth(root);

var sameTree = function (n1, n2) {
    var res;
    if (n1 === null) return n2 === null;
    if (n2 === null) return n1 === null;
    if (n1.val === n2.val){
        res = sameTree(n1.left, n2.left) && sameTree(n1.right, n2.right)
    } else {
        res = false
    }
    
    console.log(res)
    return res
}
// sameTree(root1, root2)

var isSymmetric = function (n) {
     
    if (n == null || n == []) return true;
    console.log(n === null? false : helper(n.left, n.right))
    return n === null? false : helper(n.left, n.right)

    function helper (n1, n2) {
        if (n1 === null) return n2 === null;
        if (n2 === null) return n1 === null;
        return n1.val == n2.val && helper(n1.left, n2.right) && helper(n1.right, n2.left)
    }
}
// isSymmetric(n)

var isBalancedTree = function (n) {
    
    if (n === null) return ture

    var diff = Math.abs(countLength(n.left) - countLength(n.right)) === 1
    var res = true;
    if (diff > 1) res = false;

    return res && isBalancedTree(n.left) && isBalancedTree(n.right)

    function countLength (n) {
        if (n === null) return 0
        return 1 + Math.max(countLength(n.left), countLength(n.right))
    }
}
// isBalancedTree(n)

var largestValue = function (n) {
    var res = [];
    helper(n, 0, res);
    return res

    function helper (n, depth, res) {
        if (n = null) return;
        if (depth = res.length) {
            res.push(n.val);
        }  else {
            res[d] = Math.max(res[d], n.val)
        }

        helper(n.left, d+1, res);
        helper(n.right, d+1, res);
    }
}
// largestValue(n)

var letterCasePermutation = function(S) {
    const res = new Set();
    bfs('', S, res);
    
    function bfs (far, rest, res) {
        if (rest.length === 0) {
            res.add(far);
        } else {
            const ch = rest.charAt(0);

            bfs(far + ch.toLowerCase(), rest.substr(1), res);
            bfs(far + ch.toUpperCase(), rest.substr(1), res);
        }
    } 
};

letterCasePermutation('a1b2')

var largestValue2 = function (n) {
    var res = [];

    if (root = null)return res;
    bfs(n, res);

    return res

    function bfs (n, res) {
        var q = [],
            curNum = 1,
            nextNum = 0,
            max = Number.MIN_SAFE_INTEGER

        q.push(n);

        while (q.length !== 0) {
            var node = q.pop();
            curNum--;
            max = Math.max(max, node.val);
            if (n.left != null) {
                q.push(node.left);
                nextNum++;
            };
            if (n.right != null) {
                q.push(node.right);
                nextNum++;
            };
            if (curNum == 0) {
                res.push(max);
                curNum = nextNum;
                nextNum = 0;
                max = Number.MIN_SAFE_INTEGER;
            };

        }
    }
}


var leafSimilar = function (n1, n2) {

    var arr1 = [], arr2 = [];

    countValue(n1, arr1);
    countValue(n2, arr2);
    console.log(arr1.toString() === arr2.toString())
    return arr1.toString() === arr2.toString()

    function countValue (n, arr) {
        if(n !== null) {
            if(n.left == null && n.right == null)arr.push(n.val);
            countValue(n.left, arr);
            countValue(n.right, arr);    
        }
        
    }
}

// leafSimilar(n1, n2)



/*-------------*/
/*-----BFS-----*/
/*-------------*/
var minDepth = function(n) {
    if (n == null) return 0;
    if (n.left == null){
        return minDepth(n.right) + 1;
    } else {
        if (n.right == null) {
            return minDepth(n.left) + 1;
        } else {
            return Math.max(minDepth(n.left), minDepth(n.right)+1)
        }
    }

};

/* ==========DDD M========== */
var rooms = [[2],[],[1]];
// var rooms = [[1,3,2],[2,3],[2,1,3,1],[]];
// var rooms = [[1,3],[3,0,1],[2],[0]];

var canVisitAllRooms = function(rooms) {
    let count = [0];
    
    hasKey(0);
    console.log(count.length === rooms.length) 
    return count.length === rooms.length

    function hasKey (index) {
        let curRoom =  rooms[index], nextRoom = rooms[index+1];

        for (key of curRoom) {
            let target = rooms[key];
            if (target && count.indexOf(key) === -1) {
                count.push(key);
                hasKey(key)
            }
        }
    }

    // var N = rooms.length;
    // var visited = new Set();

    // search(0);
    // return visited.size === N;

    // function search(roomIdx) {
    //     visited.add(roomIdx)
    //     rooms[roomIdx].forEach(key => {
    //         if (!visited.has(key)) {
    //             search(key);
    //         }
    //     })
    // }
};

// canVisitAllRooms(rooms)

/* ==========DDD M==========*/


/* ==========House Robber 3==========*/
var hr3 = {
    val: 1,
    left: {
        val: 3,
        right: {
            val: 6,
            right: null,
            left: null
        },
        left: {
            val: 7,
            right: null,
            left: null
        }
    },
    right: {
        val: 2,
        left:  {
            val: 10,
            right: null,
            left: null
        },
        right: null
    }
}

var rob = function(root) {
    let res = helper(root);
    
    return Math.max(res[0], res[1]);

    function helper (root) {
        if (!root) { return [0, 0]; }
        
        let left = helper(root.left);
        let right = helper(root.right);
        let res = [0, 0];
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        res[1] = root.val + left[0] + right[0];
        
        return res;
    };
};

// rob(hr3)
/* ==========House Robber 3==========*/

/* ==========Distance K TreeNode==========*/
var dkt = {
    val: 3,
    left: {
        val: 5,
        right: {
            val: 2,
            right:{
                val: 4,
                right: null,
                left: null
            },
            left: {
                val: 7,
                right: null,
                left: null
            },
        },
        left: {
            val: 6,
            right: null,
            left: null
        }
    },
    right: {
        val: 1,
        left:  {
            val: 0,
            right: null,
            left: null
        },
        right: {
            val: 8,
            right: null,
            left: null
        }
    }
}


// var distanceK = function(root, target, K) {
//     let hash = {}, res = [], tgHeight = 0;

//     if (root === null) return res;
//     hash[root.val] = 0
//     if (root.left) dfs(root.left, 1);
//     if (root.right) dfs(root.right, -1);
    
//     function dfs (node, height) {
//         if (!node) return;
//         if (node === target) tgHeight = height;
//         hash[node.val] = height;
//         height > 0? height++ : height--;
//         dfs(node.right, height);
//         dfs(node.left, height);
//     }

//     for (let key in hash) {
//         if (Math.abs(tgHeight - hash[key]) === K) res.push(parseInt(key));
//     }

//     console.log(res)
//     return res
// };

var distanceK = module.exports = function(root, target, K) {
    let res = [];
    printkdistanceNode(root, target, K);
    console.log(res)  
    return res;

function printkdistanceNodeDown (node, k) {
        if (node == null || k < 0)
            return;

        if (k == 0) {
            res.push(node.val);
            return;
        }

        printkdistanceNodeDown(node.left, k - 1);
        printkdistanceNodeDown(node.right, k - 1);
    }

function printkdistanceNode (node, target, k) {
        if (node == null)
            return -1;

        if (node.val == target) {
            printkdistanceNodeDown(node, k);
            return 0;
        }

        let dl = printkdistanceNode(node.left, target, k);

        if (dl != -1) {
            if (dl + 1 == k) {
                res.push(node.val);
            } else {
                printkdistanceNodeDown(node.right, k - dl - 2);
            }
            return 1 + dl;
        }

        let dr = printkdistanceNode(node.right, target, k);
        if (dr != -1) {
            if (dr + 1 == k) {
                res.push(node.val);
            } else printkdistanceNodeDown(node.left, k - dr - 2);
            return 1 + dr;
        }

        return -1;
    }
};

distanceK(dkt, 5, 2);
/* ==========Distance K TreeNode==========*/



/* ==========Binary Tree Right Side View==========*/

var rightSideView = function(root) {
    
};