// Q1 write a increment function
// =============================
// [2, 7, 3] => [2, 7, 4]
// [8, 9, 9] => [9, 0, 0]
// [9, 9, 9] => [1, 0, 0, 0]

function arrayIncrement () {

}

// Given gridwidth and target word, find the move path
// direction: 'u'---up 'd'---down 'l'---left 'r'---right
// Input: (5, 'up')
// a b c d e
// f g h i j
// k l m n o
// p q r s t
// u v w z y
// z
// "!" means type in
// => "dddd!u!"

function getIndexFromChar (char) {
    return "".charCodeAt(char) - 97;
}

function getMovementPath (gridWidth, word) {
    let prevX = 0, prevY = 0,  res = "";

    return word.split("").reduce((char, nextChar) => {
        let p = "";
        let curIndex = getIndexFromChar(char);
        let curX = curIndex%gridWidth; 
        let curY = Math.floor(curIndex/gridWidth);
        let diffX = curX - prevX;
        let diffY = curY - prevY;
        if (diffX !== 0) diffX > 0 ? res += "r".repeat(diffX) : res += "l".repeat(Math.abs(diffY));
        if (diffY !== 0) diffY > 0 ? res += "d".repeat(diffY) : res += "u".repeat(Math.abs(diffY));        
        res += "!"
        return res;
    })
}

var a = getMovementPath(5, 'up');
console.log(a);