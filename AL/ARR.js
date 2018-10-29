var img = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]

var flipAndInvertImage = function(img) {
    let cp = img.slice();

    cp = cp.map((v,i) => {
        let temp = v.reverse();
        temp = temp.map((w) => {
            if (w === 0) {
                return 1
            } else return 0
        })
        return temp
    })
    
    return cp
};

// flipAndInvertImage(img)

// var nums = [1,2,3,4];

var maximumProduct = function(nums) {
    
    nums.sort((a,b) => { return a - b })
    
    console.log(nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3])
    return nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3]
};

// maximumProduct(nums)


var flower = [1,0,0,0,1,0,0];

var canPlaceFlowers = function(flowerbed, n) {
    let count = 0, res = 0;

    if(flowerbed.length === 0) return n === 1

    flowerbed.forEach((v, i) => {
        if (v === 0) {
            if (i === 0 || i === flowerbed.length - 1)count++;
            count++;
        }
        if (v === 1 || i === flowerbed.length-1 ) {
            res += Math.floor((count-1)/2);
            count = 0;
        }
    })

    console.log(n === res)
    return  n === res
};

// canPlaceFlowers(flower, 2)



let nums = [[2,3], [4,1]], r = 1, c= 4;

const matrixReshape = function(nums, r, c) {
    let count = nums.length * nums[0].length;
    if (count !== r*c) return nums

    let arr = [], res = [], idx = 0;
    for (let v of nums) {
        arr.push(...v);
    }

    for(let i = 0; i < r; i++) {
        res.push([])
        for(let j = 0; j < c; j++) {
            res[i][j] = arr[idx];
            idx++;
        }
    }

    console.log(res)
    return res
};

// matrixReshape(nums, r, c)

var arr2 = [-1], k = 1;

var findMaxAverage = function(nums, k) {
    // var i = 0, max = Number.MIN_SAFE_INTEGER, len = nums.length;
    // if (len === 0 || nums === null) return 0;
    // if (len <= k) {
    //     console.log(nums.reduce((a,b) => a+b))
    //     return nums.reduce((a,b) => a+b)/k
    // }

    // while (i+k <= len){
    //     let temp = 0, j=i;
    //     for(; j<=i+k-1; j++){
    //         temp += nums[j];
    //     }
    //     max = Math.max(max, temp);
    //     i++;
    // }
    // console.log(max/k)
    // return max/k

    // sliding windows save the space usually
    var sum = 0;
    for (let i=0; i<k; i++) sum += nums[i];
    var res = sum;
    for (let i=k; i<nums.length; i++) {
        sum += nums[i] - nums[i-k];
        res = Math.max(res, sum);
    }
    console.log(res/k)
    return res/k;
    
};
// findMaxAverage(arr2, k)



var arr3 = [1,3,5,7];

var findLengthOfLCIS = function(nums) {
    let count = 1, max = Number.MIN_SAFE_INTEGER;
    if (nums.length === 0) return 0

    for(let i=1; i<=nums.length; i++) {
        if (i === nums.length) return Math.max(count, max)
        if (nums[i] > nums[i-1]) {
            count++;
        }
        else {
            max = Math.max(count, max);
            count = 1;
        }
    }
    console.log(max)
    return max

    // let ans = 0, anchor = 0;
    // for (let i=0; i<nums.length; i++) {
    //     if (i>0 && nums[i-1]>nums[i]) anchor = i;
    //     ans = Math.max(ans, i - anchor + 1)
    // }
    // return ans

};

// findLengthOfLCIS(arr3)



var isToeplitzMatrix = function(matrix) {
  let map = {};
  for (let r = 0; r < matrix.length; r++)  {
    for (let c = 0; c < matrix[0].length; c++) {
        if (!map[r-c]) map[r-c] = matrix[r][c];
        else if (map[r-c] !== matrix[r][c]) return false;
    }
  }

  return true
};



let A = [[1,2,3], [4,5,6]]
var transpose = function(A) {
    let res = [];
    if (A.length == 0) return []
    for (let i = 0; i < A[0].length; i++) {
        let temp = [];
        for (let j=0; j<A.length; j++) {
            temp.push(A[j][i])
        }
        res.push(temp)
    }

    return res
};

transpose(A)