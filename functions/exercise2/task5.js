/*
Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/

var positionOfCharacter = function (a, b){
    var position = 0;
    for (var i = 0; i < a.length; i++){

        if (a[i]===b){
            position = i+1;
            break;
        } else {
            position = -1;
        }
    }
    return position;
}

var result = positionOfCharacter('position', 'a');
console.log(result);