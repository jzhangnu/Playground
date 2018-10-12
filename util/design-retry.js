function f(data, scb, ecb) {
    // success something
    let success = false;
 
    if (success) {
        scb(data);
    } else {
        ecb('aaa');
    }
}
 
 
function retry(n, data, scb, ecb) {
     // excute f
    let curCount = 0;
 
    function realEcb () {
        ecb.apply(this, arguments);
 
        ++curCount;
        if (curCount < n) {
            // f.call(null, data, scb, realEcb);
            f(data, scb, realEcb);
        }
    }
         
    f(data, scb, realEcb);
}
 
 
retry(4, {name: 'make'}, (d) => console.log("ok: " + d), (d) => console.log('error:' + d));
