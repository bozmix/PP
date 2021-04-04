/*Write a program that calculates an arithmetic mean of four numbers.*/

var a = 15, b = 12, c = 18, d = 35;
var median = 0;

function mean(a, b, c, d){
    var sum = a + b + c + d;
    var result = sum / 4;
    return result;
}

median = mean(a, b, c, d);
console.log(median);