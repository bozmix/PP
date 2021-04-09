/*
Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000]
*/

function stringToNumbers(a){
    var b = [], c = [], d = [], j = 0;
    for (var i = 0; i < a.length; i++){
        b[i] = parseFloat(a[i]);
        c[i] = isFinite(b[i]);
        if (c[i]){
            d[j]=b[i];
            j++;
        }
    }
    return d;
}
var result = stringToNumbers(['1', '21', undefined, '42', '1e+3', Infinity]);
console.log(result);