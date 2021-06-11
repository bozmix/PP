/*
Write a function that adds string to the left or right of string, by replacing it’s characters.
&#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; 0123
&#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; 12300000
*/

function replace (s, r, p){
    if(p === 'l'){
        var a = s.split('');
        //var b = r.split('');
        a.splice(a.length-r.length, r.length, r);
        var c = a.join('');
        return c;
    } else if (p === 'r'){
        var a = s.split('');
        //var b = r.split('');
        a.splice(0, r.length, r);
        var c = a.join('');
        return c;
    }
}

console.log(replace('0000', '123', 'l'));
console.log(replace('00000000', '123', 'r'));
