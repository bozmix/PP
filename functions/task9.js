/*Write a program that calculates the sum of odd elements of a given array.*/

var a = [1, 2, 3, 4, 5, 6, 7, 9, 11];

function sumOfOdd (a){
    var s = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i]%2 !== 0){
            s += a[i];
        }
    }
    return s;
}

var result = sumOfOdd(a);
console.log(result);