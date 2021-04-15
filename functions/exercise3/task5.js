/*
Write a function to get the last element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
*/

function lastElements(array, n){
    n = n || 1;
    var counter = array.length - n;
    var b = [];
    var j = n-1;

    for (var i = array.length-1; i >= 0 && i >= counter; i--){
        b[j] = array[i]
        j--;
    }
    return b;
}
var result = lastElements([7, 9, 0, -2], 2);
console.log(result);