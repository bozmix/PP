/*
Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
&quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
&quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;
*/
function insertString (string1, string2, n){
    var a = '';
    //if (typeof(n)!=='number') n=1;
    n = n || 1;
    for(var i = 0; i < string1.length; i++){
        if (i===n-1){
            a+=string2+string1[i];
        } else {
            a+=string1[i];
        }
    }
    return a;
}

var result = insertString('my random string', 'JS ', 11);
console.log(result);