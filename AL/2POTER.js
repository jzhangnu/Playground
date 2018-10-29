var str1 = "bxj##tw", str2 = "bxj###tw";

var backspaceCompare = function(S, T) {
    // let t1 = '',
    //     t2 = '';

    // for (let i = 0; i < S.length; i++) {
    //     let s = S.charAt(i);
    //     s !== '#' ? t1 += s : t1 = t1.slice(0, t1.length-1);
    // }

    // for (let i = 0; i < T.length; i++) {
    //     let t = T.charAt(i);
    //     t !== '#' ? t2 += t : t2 = t2.slice(0, t2.length-1);
    // }

    // console.log(t1);
    // console.log(t2);
    // if (t1 === t2) return true;
    // else return false;

    var i = S.length-1, j = T.length-1,
        sk1 = 0, sk2 = 0;

    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S.charAt(i) === '#') {
                sk1++;
                i--;
            }
            else if (sk1 > 0) {
                sk1--;
                i--;
            }
            else break;
        }
        while (j >= 0) {
            if (T.charAt(j) === '#') {
                sk2++;
                j--;
            }
            else if (sk2 > 0) {
                sk2--;
                j--;
            }
            else break
        }

        if(i >=0  && j >= 0 && S.charAt(i) != T.charAt(j)){
            console.log(false)
            return false;
        }
        
        if ((i >= 0) ^ (j >= 0)) {
            console.log(false)
            return false;
        }

        i--; 
        j--;
    }
    
    console.log(true)
    return true
}

backspaceCompare(str1, str2)