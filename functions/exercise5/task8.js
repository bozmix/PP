/*
Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/
function writeReverse (a){
    var str = ''
    for (var i = a.length - 1; i >= 0; i--){
        str += a[i];
    }
    return console.log(str);
}

writeReverse('Belgrade Institute of Technology');