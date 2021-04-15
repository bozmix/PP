/*
Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/

var a = [4, 5, 11, 9];
(
    function (a) {
        var b = [];
        b[0] = a[a.length-1];
        b[a.length-1] = a[0];
        for (var i = 1; i < a.length-1; i++){
            b[i] = a[i];
        }
        console.log(b);
    }
)(a);