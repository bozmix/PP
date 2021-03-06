/*Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)

Output: 15*/

var a=31;

if (a % 5 === 0 && a % 3 === 0) {
    console.log("Number " + a + " is divisible by 3 and 5");
}   else {
    console.log("Number " + a + " is not divisible by 3 and 5")
}                                 