/*
Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number
*/

function reverseNumber(a){
    var b = a + '';
    var c = '';

    for (var i = b.length-1; i >= 0; i--){
        c+=b[i]
    }
    return parseInt(c);
}

var result = reverseNumber(1023456789);
console.log(result, typeof(result));
