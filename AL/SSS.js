var words = ["gin", "zen", "gig", "msg"];

var uniqueMorseRepresentations = function(words) {
    var mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    var arr = [];

    words.forEach((v,i) => {
        let temp = '';
        for(let j = 0; j < words[i].length; j++){
            let turned = words[i].charCodeAt(j) - 97;
            temp += mos[turned]
        }

        if (arr.indexOf(temp) === -1) arr.push(temp)
    })

    return arr.length
};

// uniqueMorseRepresentations(words)

let moves ='DDULULRR';

var judgeCircle = function(moves) {
    var horizon = 0, vertical = 0;

    for (let i=0; i<moves.length; i++){
        switch (moves.charAt(i)) {
            case 'U': {
                vertical++;
                continue;
            }
            case 'D': {
                vertical--;
                continue;
            }
            case 'L': {
                horizon--;
                continue;
            }
            case 'R': {
                horizon++;
                continue;
            }
        }
    }
    return horizon === 0 && vertical === 0
};

// judgeCircle(moves)



var countBinarySubstrings = function(s) {
    if (s.length <= 1) return 0;
    var preRun = 0; 
    var curRun = 1;
    var count = 0 

    for (var i = 1; i < s.length; i++) { 
        if (s[i - 1] === s[i]) curRun++; 
        else { 
            preRun = curRun; 
            curRun = 1;     
        }
        if (preRun >= curRun) count++;
    }
    return count;   
};


// ========Easy Candy Crush=======
let str = 'abbbaaccdddc';
str = ''

var candyCrush = function(s) {

    for(let i=0; i<s.length;) {
        if(s[i] === s[i+1] && s[i+1] === s[i+2] && s[i] === s[i+2]){
            s = s.slice(0, i) + s.slice(i+3, s.length)
            i = 0;
        } else i++;
    }

    if (s.length === 0)console.log(true)
    else return false 
}

// candyCrush(str)

var board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]

var candyRealCrush = function(b) {

}

function debounce (fc, wait, immediate) {
    console.log('start')
    var timeout;
    return function () {
      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      console.log(this)
      
      timeout = setTimeout(() => {
          console.log(this)
        timeout = null;
        if (!immediate) fc.apply(this, arguments);
        // fc.apply(this, arguments);
      }, wait)
      
      if (callNow) fc.apply(this, arguments)
    }
  }

  function sayHello() {
    console.log('My name is', this.name)
  }
  
  const amy = {
    name: 'amy',
    speak: debounce(sayHello, 5000, false)
  }

  amy.speak();
//   amy.speak();