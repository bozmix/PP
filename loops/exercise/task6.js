/*Write a program that outputs the sum of squares of the first 20 numbers.*/
var i=0, sum=0, square=0;
while (i<=20) {
    square=i*i;
    sum+=square;
    i++;
}
console.log("sum of squares is "+sum);