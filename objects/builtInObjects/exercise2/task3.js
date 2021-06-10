/*
Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
'Republic Of Serbia' -> 'Rbceilpu Of Sabeir'
*/
function alphabetize (w){
    var c = [];
    var s = w.split(' ');
    s.forEach(function(el){
        var a = el.slice(1, el.length);
        var b = a.split('').sort().join('');
        c += el[0] + b + ' ';
    })
    return c;
}

console.log(alphabetize('Republic Of Serbia'));