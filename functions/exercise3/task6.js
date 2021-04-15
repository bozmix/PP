/*
Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, 'none' -> ['none', 'none']
2 -> [null, null]
*/

function repeatElements(n, e){
    var a = [];
    if (typeof(e) === "undefined") e = null;
    for (var i = 0; i < n; i++){
        a[i] = e;
    }
    return a;
}

var result = repeatElements(10, 5);
console.log(result);