String.prototype.repeat = function (count) {
    'use strict';

    if (this == null) {
        throw new TypeError('can\'t convert' + this + ' to object');
    }

    var str = '' + this;
    count = +count;
    // if (count != count) {
    //     count = 0;
    // }
    if (count < 0) {
        throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }

    count  = Math.floor(count);
    if (str.length == 0 || count == 0) {
        return '';
    }

    if (str.length * count >= 1 << 28) {
        throw new RangeError('repeat count must not overflow maximum string size');
    }

    // my implement
    var origStr = str;
    count -= 1;
    while (count) {
        str += origStr;
        count--;
    }
    return str;    

    // core code here
    // var maxCount = str.length * count;
    // count  = Math.floor(Math.log(count) / Math.log(2));
    // console.log(count);
    
    // while (count) {
    //     str +=str;
    //     count--;
    // }
    // console.log(str);
    // str += str.substring(0, maxCount - str.length);
    // return str
}

console.log('Hello'.repeat(100));