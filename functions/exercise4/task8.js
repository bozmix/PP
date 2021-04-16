/*
Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
function concatenate(a,b){
    var c = []
    for (var i = 0; i < a.length; i++){
        c[i] = a[i];
        c[a.length+i] = b[i];
    }
    return c;
}
console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));