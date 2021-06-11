/*Write a function to capitalize the first letter of a string and returns modified string.
&quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot;
*/

function capitalize (s){
    var a = s.split('');
    a[0] = a[0].toUpperCase();
    var b = a.join('');
    return b;
}

console.log(capitalize('js string exercises'));
