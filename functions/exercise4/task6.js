/*
Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/

var isSymetric = function(a){
    var output = "";
    for (var i = 0; i < a.length/2; i++){
        if (a[i] === a[a.length-1-i]){
            output = "The array is symetric";
        } else {
            output = "The array is not symetric";
            break;
        }
    }
    return output;
}
console.log(isSymetric([3, 4, 12, 8]));