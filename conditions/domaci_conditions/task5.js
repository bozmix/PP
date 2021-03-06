/*Task 4 exercise
Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

Sample numbers: 10 | 7 (check one at the time)

Output: 10 / 2 = 5 | X */

var a = 7, type = typeof a, result = a%2;
var result1 = a / 2;
if(type==="number"){
    if(result!==0){
        console.log("X");
    } else {
        console.log(a + " / 2 = " + result1);
    }
} else {
    console.log("Variable is not a number")
}