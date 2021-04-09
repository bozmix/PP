/*
Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function shorten(a, n){
    var c = '';
    for (var i = 0; i < n; i++){
        c+=a[i];
    }
    c+='...';
    return c;
}

var result = shorten('my random string', 10);
console.log(result);