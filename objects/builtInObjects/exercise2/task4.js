/*
Write a function to split a string and convert it into an array of words.
&quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ]
*/
function createArray (s){
    return s.split(' ');
}

console.log(createArray('John Snow'));