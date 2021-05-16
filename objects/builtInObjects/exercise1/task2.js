/*
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
*/

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function checkDuplicate (num, a){
    for ( var i = 0; i < a.length; i++){
        if (a[i] === num){
            return false
        }
    }
}

var b = a.filter(checkDuplicate);

console.log(b);