/*
Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

var sum = 0;

for (var i = 0; i <= 1000; i++){
    if (i % 2 === 0 && i <= 1000){
        sum += i;
    } else if (i <= 500){
        sum -= i;
    }
}
var result = sum * 12.5;
console.log(result);