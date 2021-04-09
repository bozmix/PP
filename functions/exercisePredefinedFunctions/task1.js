/*Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000]*/

var a = ['1', '21', undefined, '42', '1e+3', Infinity];

function getNum(b) {
    var c = [];
    var j = 0;
    for (var i = 0; i < b.length; i++){
        var d = parseFloat(b[i]);
        if (isFinite(d)){
            c[j]=d;
            j++;
        }
    }
    return c;
}

var result = getNum(a);
console.log(result);