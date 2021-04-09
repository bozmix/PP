/*
Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
'My random string' -> ['M', 'y', null, 'r', 'a']
'Random' -> ['R', 'a', 'n', 'd', 'o', 'm']
*/

function convertStringToArray (a){
    var b = [];
    for (var i = 0; i < a.length; i++){
        if (a[i]!==' '){
            b[i] = a[i];
        } else {
            b[i]=null;
        }
    }
    return b;
}

var result = convertStringToArray('random');
console.log(result);