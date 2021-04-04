/*Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247”*/

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function merge(k){
    var b = '';
    var d;

    for (var i = 0; i < k.length; i++){
        
        if (isFinite(k[i])&&k[i]!==null){
            b+=k[i];
        }
    }
    return b;
}

var result = merge(a);
console.log(result);