/*
Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
function insertElement(e, p, a){
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++){
        if (i === p){
            b[j]=e;
            j++;
            b[j]=a[i];
            j++;
        } else {
            b[j]=a[i];
            j++;
        }
    }
    return b;
}
console.log(insertElement(78, 3, [2, -2, 33, 12, 5, 8]));