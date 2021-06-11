/*
Write a function to hide email addresses to protect them from unauthorized users.
&quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot;
*/

function hideAddress(a){
    var i = a.indexOf('@');
    var nameLength = i - 1;
    var b = a.split('');
    b.splice(nameLength - 6, 7, '...');
    var c = b.join('');
    return c;
}

console.log(hideAddress('somerandomaddress@gmail.com'));