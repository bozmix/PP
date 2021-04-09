/*Write a function that concatenates a given string n times (default is 1).
'Ha' -> 'Ha'
'Ha', 3 -> 'HaHaHa'*/

function concatenateNTimes (a, b) {
    var result = ''
    if (typeof(b)!=='number'||b <= 0){
        b = 1;
    }
    for (var i = 0; i < b; i++){
        result+=a;
    }
    return result;
}

var n = 'Ha';
console.log(concatenateNTimes(n));

