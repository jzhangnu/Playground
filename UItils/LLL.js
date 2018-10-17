var Foo = function(a){
    function bar(){
        return a;
    }
    this.baz = function(){ 
        return a;
    };
}
Foo.prototype = {
    biz: function(a) {
        console.log(a)
        return a;
    },
    // bar: function() {
    //     console.log(7)
    // }
}

foo = new Foo(7);


// foo.bar();           // 
// foo.baz();           // 7
// foo.biz();           // undefined

// foo.biz(7);          // 7