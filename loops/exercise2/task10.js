/*Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8], b = [], j=0;

for (var i=0; i<a.length; i++) {
    if (p<=a.length) {
        if (p!==)
        b[j]=a[i]

    } else {
        console.log("Error!!! Position of given index is greater than the length of the array");
        break;
    }
}
