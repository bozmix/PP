/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

var a=12, b=5, sum, result;

if (a!==b){
    sum=a+b;
    result=sum;
} else {
    sum=a+b;
    result=3*sum;
}
console.log(result);