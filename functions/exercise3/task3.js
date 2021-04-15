/*
Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

function filterFalsy(a){
    var b = [];
    var j = 0;
    for (var i = 0; i < a.length; i++){

        if (a[i]){
            b[j]=a[i];
            j++;
        }
    }
    return b;
}

var result = filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result);