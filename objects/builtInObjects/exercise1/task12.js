/*
12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]

Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
*/
function shakeArray (a){
    var c = [];
    var k = [];
    var j = 0;
    var l = 0;
    for (var z = 0; z < a.length; z++){
        k[z] = z;
    }
    for (var i = a.length - 1; i >= 0; i--){
        j = Math.floor(Math.random() * (i));
        l = k.splice(j, 1);
        c.push(a[l]);
    }
    return console.log(c);
}

shakeArray([3, 6, 11, 2, 9, 1]);