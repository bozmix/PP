/*Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var a = [4, 5, 6, 2], b = [3, 8, 11, 9];
var c=[], j=a.length;

for (var i=0; i<a.length; i++){
    c[i]=a[i];
    c[j]=b[i];
    j++;
}
console.log(c);