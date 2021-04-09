/*Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3*/

function numOfIntegers (a){
    var b, c;
    var counter = 0;
    for (var i = 0; i < a.length; i++){
        b = parseFloat(a[i]);
        c = parseInt(a[i]);
        if (b===c) {
            counter+=1;
        }
    }
    return counter;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null, 5, 5, 5, 5.5];
var result = numOfIntegers(a);
console.log(result);