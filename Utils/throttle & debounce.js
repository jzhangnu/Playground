// ···················throttle····················· //
// 我们这里说的throttle就是函数节流的意思。再说的通俗一点就是函数调用的频度控制器.
// 控制方法调用的<频率>，不允许在x ms里调用超过一次。
// enforce a maximum number of times a function can be called over time.
// will delay executing a function.
// It will reduce the notifications of an event that fires multiple times.
// ||||| |||
// !     ！
// 主要应用的场景比如：
// 鼠标移动，mousemove 事件
// DOM 元素动态定位，window对象的resize和scroll 事件

var throttle = function(fn,delay){
  var called = false;
  return function(){
    if (called === false) {
      called = true;
      fn.call(this,arguments);
      setTimeout(function() {
        called = false;
      },delay)
    }
  }
}
var throttle_fc = new throttle(fn,2000);

// another way
var throttle = function(fn,delay){
  var called = false;
  return function(){
    if (called === false) {
      called = true;
      fn();
      setTimeout(function() {
        called = false;
      },delay)
    }
  }
}

function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

// ···················debounce····················· //
// debounce是空闲时间必须大于或等于一定值的时候，才会执行调用方法.
// 不允许回调函数在指定时间内执行多一次。将<连续>的调用归为一个。
// will bunch a series of calls to a function into a single call to that function.
//  ||||||    |
// !      !     !
// debounce主要应用的场景比如：点击搜索

function debounce(func, wait, immediate) {
    // 'private' variable for instance
    // The returned function will be able to reference this due to closure.
    // Each call to the returned function will share this common timer.
    var timeout;

    // Calling debounce returns a new anonymous function
    return function() {
        // reference the context and args for the setTimeout function
        var context = this,
            args = arguments;

        // Should the function be called now? If immediate is true
        //   and not already in a timeout then the answer is: Yes
        var callNow = immediate && !timeout;

        // This is the basic debounce behaviour where you can call this
        //   function several times, but it will only execute once
        //   [before or after imposing a delay].
        //   Each time the returned function is called, the timer starts over.
        clearTimeout(timeout);

        // Set the new timeout
        timeout = setTimeout(function() {

             // Inside the timeout function, clear the timeout variable
             // which will let the next execution run when in 'immediate' mode
             timeout = null;

             // Check if the function already ran with the immediate flag
             if (!immediate) {
               // Call the original function with apply
               // apply lets you define the 'this' object as well as the arguments
               //    (both captured before setTimeout)
               func.apply(context, args);
             }
        }, wait);

        // Immediate mode and no wait timer? Execute the function..
        if (callNow) func.apply(context, args);
     };
};

// Example 2

function debounce(func, wait) {
  var timeout;
  return function() {
    var that = this,
        args = arguments;
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(that, args), wait)
  }
}