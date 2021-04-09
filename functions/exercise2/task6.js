/*
Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/

function positionOfLastCharacter (a, b) {
    var position = 0;
    for (var i = a.length-1; i >= 0; i--){
        if (b===a[i]){
            position = i+1;
            break;
        } else {
            position = -1;
        }
    }
    return position;
}
var result = positionOfLastCharacter('positioning', 'g');
console.log(result);