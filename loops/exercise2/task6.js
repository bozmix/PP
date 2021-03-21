/*Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.*/

var a = [2, 4, -2, 7, -2, 4, 2];
//var a = [3, 4, 12, 8]
var i=j=0, c='';
j=a.length-1;
do {
    if (a[i]==a[j]) {
        i++;
        j--;
        c="The array is symmetric";
    } else {
        c="The array is not symmetric";
        break;
    }
    
} while (i!==j);

console.log(c);
