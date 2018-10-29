var arr1 = [5,25,75];
var arr2 = [1,2,4,9,19,12]

var twoSum = function(num, target) {
    var res = [], len = num.length;

    for (let i = 0; i < len; i++) {
        var left = i + 1, right = len -1;
        while (left <= right) {
            var mid = parseInt((left + right)/2);
            if (num[mid] < target - num[i]) left = mid + 1;
            else if (num[mid] > target - num[i]) right = mid - 1;
            else {
                res.push(i + 1);
                res.push(mid + 1);
                console.log(res);
                return res;
            }
        }
    }
    console.log(res);
    return res;
};

// twoSum(arr1, 100)


var searchInsert = function(nums, target) {
    var left = 0, right = nums.length - 1;

    while (left <= right)  {
        var mid = parseInt((left + right)/2);
        if (nums[mid] < target) left = mid + 1;
        else if(nums[mid] > target) right = mid - 1;
        else {
            console.log(mid);
            return mid
        }
    }
    console.log(left)
    return left
};

// searchInsert(arr2, 9)

var isPerfectSquare = function(num) {
    var left = 0, right = num;
    while (left <= right) {
        let mid = left + (right - left)/2,
            t = mid * mid;
        if (t === num) return true;
        else if (t < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};

