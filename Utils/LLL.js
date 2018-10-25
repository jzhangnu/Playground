var Foo = function(a){
    this.bar(){
        return a;
    }
    this.baz = function(){ 
        return a;
    };
}
Foo.prototype = {
    biz: function(a) {
        // return this.a;       correct
        return a
    }
}

foo = new Foo(7);


// foo.bar();           // 
// foo.baz();           // 7
// foo.biz();           // undefined
