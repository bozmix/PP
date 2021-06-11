/*
Write a program that accepts a string as input and swaps the case of each character. For
example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
&quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot;
*/

function replaceCase (s){
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var b = UPPER.split('');
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var output = '';
    var a = s.split('');
    a.forEach(function(el){
        if (UPPER.includes(el)){
            output += el.toLowerCase();
        } else {
            output += el.toUpperCase();
        }
    })
    return output;
}
console.log(replaceCase('The Quick Brown Fox'));