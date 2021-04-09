/*Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47]*/

function notFalse (a) {
    var b = [];
    var c = [];
    var j = 0;
    for (var i = 0; i < a.length; i++){
        b[i]=!(!(a[i]));
        if (b[i]){
            c[j]=a[i];
            j++;
        }
    }
    return c;
}

a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var result = notFalse(a);
console.log(result);