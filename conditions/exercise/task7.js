/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

var a=32, result, result1;
result=a-13;
if (result>13){
    result1=2*result;
} else if (result>=0&&result<13){
    result1=result;
} else if (result<0){
    result1=(-1)*result;
}
console.log(result1);