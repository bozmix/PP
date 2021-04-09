/*
Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot;
*/

function replaceSpace (a, b){
    var c=''; 
    if (typeof(b)!=="string"){
        b='-';
    }
    for (var i = 0; i < a.length; i++){
         
        if (a[i]===' '){
             c+=b;
         } else {
             c+=a[i];
         }
    }
     return c;
}

var result = replaceSpace('My random string');
console.log(result);