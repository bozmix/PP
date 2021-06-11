/*
Write a function to convert a string to its abbreviated form.
&quot;John Snow&quot; -&gt; &quot;John S.&quot;
*/

function abbreviate (s){
    var a = s.split(' ');
    var c = a[a.length-1].split('');
    c = c.splice(1,a.length-2,'.').join('');
    a[a.length-1] = c;
    var b = a.join(' ');
    return b;
}

console.log(abbreviate('John Snow'));