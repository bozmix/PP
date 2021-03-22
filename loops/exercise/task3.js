/*Write a program to compute the sum and product of an array of integers.*/

var a = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum=0, product=1;

for (var i=0; i<a.length; i++) {
    sum+=a[i];
    product*=a[i];
    //console.log("sum of number "+a[i]+" and previous numbers is "+sum+"\n"+ "product of number "+a[i]+" and previous numbers is "+product+"\n");
}
console.log("sum of elements of array is "+sum+"\n");
console.log("product of numbers of the array is "+product);