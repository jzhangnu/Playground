var array = ['03-11-2018', '04-12-2018', '10-21-2017'];

array.sort((a, b) => {
    a = a.split('-');
    b = b.split('-');
    if (a[2] === b[2]){
        if (a[0] === b[0]) {
            if (a[1] > b[1]) return 1
            else return -1
        } else if (a[0] > b[0]) return 1;
        else return -1
    } else if (a[2] > b[2]) return 1;
    else return -1;
})

console.log(array)