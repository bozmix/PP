/*Write a function to check whether the `input` is a string or not.
'My random string' -> true
12 -> false*/

function isString(a){
    var result;
    if (typeof(a)==='string'){
        result = true;
    } else {
        result = false;
    }
    return result;
}

var c = 'null';
var result = isString(c);
console.log(result);
//console.log(typeof(c));