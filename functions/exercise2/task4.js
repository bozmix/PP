/*
Write a function to count the number of letter occurrences in a string.
'My random string', 'n' -> 2
*/

function numberOfLetters (a, b){
    var counter = 0;
    for (var i = 0; i < a.length; i++){
        if (b===a[i]){
            counter++;
        }
    }
    return counter;
}

var a = 'My random string';
console.log(numberOfLetters(a, 'n'));