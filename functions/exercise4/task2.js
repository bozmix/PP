/*
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multipleByTwo (a){
    var b= [];
    for (var i = 0; i < a.length; i++){
        if (a[i]>0){
            b[i] = 2 * a[i];
        } else {
            b[i] = a[i];
        }
    }
    return b;
}

console.log(multipleByTwo([-3, 11, 5, 3.4, -8]));