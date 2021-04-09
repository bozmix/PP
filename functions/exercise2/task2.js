/*Write a function to check whether a string is blank or not.
'My random string' -> false
'' -> true
12 -> false
false -> false*/

var isBlank = function (a){
    var result;
    var b = typeof(a);
    var c;
    if (b==='string'){
        c = a.length;
        if (c===0){
            result = true;
        } else {
            result = false;
        }
    } else {
        result = false;
    }
    return result;
}
var a = 'my random string', b = '', c = 12, d = false;
console.log(isBlank(b));