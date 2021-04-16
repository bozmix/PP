/*
Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement(e, a){
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i]!==e){
            b[j] = a[i];
            j++;
        }
    }
    return b;
}
console.log(deleteElement(2, [4, 6, 2, 8, 2, 2]));