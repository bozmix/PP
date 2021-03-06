/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true*/

var a=40, b=10, sum=a+b, result="";

if (a===50||b===50||sum===50) {
    result="true";
} else {
    result="-";
}
console.log(result);