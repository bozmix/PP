/*
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw”
*/
function rearangeWord (w){
    var s = w.toLowerCase().split('').sort().join('');
    return s.toString();
}

console.log(rearangeWord('Webmaster'));