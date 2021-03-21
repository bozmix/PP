/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var a= [-3, 11, 5, 3.4, -8];
var b=[], i=0;

while (i<a.length){
    if (a[i]>0){
    b[i]=2*a[i];
    } else {
        b[i]=a[i];
    }
    i++;
}
console.log(b);