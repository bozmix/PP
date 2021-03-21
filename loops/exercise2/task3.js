/*Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var a= [4, 2, 2, -1, 6], x=a[0], c=0, x=0;

for (var i=0; i<a.length; i++) {
    if (a[i]<x){
        x=a[i];
        c=i;
    } 
}
console.log(x + ',\t'+ c);

