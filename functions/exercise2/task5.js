/*Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2*/

function numOfFloats (a){
    var b, c, d;
    var counter = 0;
    for (var i = 0; i < a.length; i++){
        b = parseFloat(a[i]);
        c = parseInt(a[i]);
        d = isFinite(c);
        if (b!==c&&d){
            counter+=1;
        }
    }
    return counter;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null, 2.2, 3.2, -3.2];
var result = numOfFloats(a);
console.log(result);