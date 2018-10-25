var a =  function x() {alert(1)};
// Function.prototype.toString = (function () {
//     const orignalToString = Function.prototype.toString;
//     return function() {
//         return 'start:' + orignalToString.apply(this) + ':end';
//     }
// })()

function newtoStr() {
    const origToString = Function.prototype.toString;
    return function() {
        return 'start:' + origToString.call(this) + ':end';
    }
}

Function.prototype.toString = newtoStr();
console.log(1 + function x() {alert(1)})