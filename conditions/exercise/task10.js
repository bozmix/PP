/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/

var a=256, result="";

if (a<20) {
    result="-";
} else if (a>20&&a<100){
    result="20 ⇔ 100";
} else if (a>100&&a<400) {
    result="100 ⇔ 400";
}
console.log(result);