/*Write a program which prints the elements of the following array as a single string.
var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var y = '';

for (var i=0; i<x.length; i++) {
    y+=x[i];
}
console.log(y);