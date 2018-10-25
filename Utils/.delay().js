"use strict";

function $(selector) {
    const elm = new Element(selector);
    return elm;
  }
  
  class Element {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.array = [];
        this.delayFlag = false;
        this.time = 0;
    }
    
     addClass = (...className) => {
        const elm = this.element;
        if(this.delayFlag) {
            this.array.push([this.addClass.bind(this), ...className]);
        } else {
            elm.classList.add(...className);
        }
        return this
     }

     removeClass = (...className) => {
        const elm = this.element;
        if(this.delayFlag) {
            this.array.push([this.removeClass.bind(this), ...className]);
        } else {
            elm.classList.remove(...className);
        }
        return this
     }
    
    delay(time) {
        this.delayFlag = true;
        this.time = time;
        let that = this;
        
        setTimeout(function() {
            let len = that.array.length;
            that.delayFlag = false;
            
            while (len > 0) {
            let task = that.array.shift();
            let cb = task[0];
            let params = task[1];
            cb(params);
            len--;
            }
        }, this.time)
        
        return this;
    }
  }
  
  //$("#app").addClass("red").delay(3000).addClass("big").addClass("blue")