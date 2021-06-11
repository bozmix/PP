/*
Write a function to convert a string to its abbreviated form.
&quot;John Snow&quot; -&gt; &quot;John S.&quot;
*/

function abbreviate (s){
    var a = s.split(' ');
    var c = a[a.length-1].split('');
    c.splice(1, c.length-1, '.');
    var d = c.join('');
    a[a.length-1] = d;
    var b = a.join(' ');
    return b;
}

console.log(abbreviate('John Snow'));