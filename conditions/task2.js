/*Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd*/

var a = 5, result;

if (a % 2 === 0) {
    result="Number " + a + " is even";
} else {
   result="Number " + a + " is odd";
}
console.log(result);