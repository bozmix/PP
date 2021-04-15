/*
Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]
*/
var a = [2, 8, 11, 4, 9, 3];
(
    function (a){
        var b = [];
        var j = 0;
        for (var i = 0; i < a.length; i++){
            if (a[i]%2!==0){
                b[j] = a[i];
                j++;
            }
        }
        console.log(b);
    }
)(a);