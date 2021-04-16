/*
Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

var interwineArrays = function (a, b){
    var c = [];
    for (var i = 0; i < a.length; i++){
        c[2*i] = a[i];
        c[2*i+1] = b[i];
    }
    return c;
}
console.log(interwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));