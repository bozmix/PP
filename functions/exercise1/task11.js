/*Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

var s = 'Apreciate', n = 4;

function stringMultiply (m, d){
    var s = '';
    for (i = 1; i <= d; i++){
        s += m;
    }
    return s;
}

var result = stringMultiply(s,n);

console.log(result);