/*Write a program that calculates a number of digits of a given number.*/


function numOfDigits(b){
    var s = 0;
    for (var i = 10; b >= 1; i*10){
    b/=i;
    s+=1;
    }
    return s;
}
var a = 91050.2;
var result = numOfDigits(a);
console.log(result);
