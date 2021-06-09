/*
Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -> 54321
*/
function reverseNumber(n){
    var s = '';
    var z = '';
    var c = [];
    var i = 0;

    s = n.toString().split('');
    s.forEach(function(el){
        c[s.length - i - 1] = el;
        i++;
    })
    z = c.join('');
    var output = parseInt(z, 10);
    return console.log(output, typeof output);
}

reverseNumber(123437);