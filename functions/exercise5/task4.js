/*
(skip :))Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

var a = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
function sortAndDoubleArray (a){
    var temp = a[0];
    var j = 0;
    var b = [];
    while (j < a.length){

        for (var i = 0; i < a.length; i++){
            if (a[i] <= temp){
                temp = a[i];
                index = i;
            }
        }
        b[j] = temp;
        for (var k = 0; k < a.length; k++){
            if (k === index){
                a[k] = 'replaced';
            } else {
                a[k] = a[k];
            }
        }
        j++;
        for (var l = 0; l < a.length; l++){
            if (a[l] !== 'replaced'){
                temp = a[l];
                break;
            }
        }
    }
    var d = [];
    for (var n = 0; n < b.length; n++){
        d[n] = 2 * b[n];
    }
    return d;
}

console.log(sortAndDoubleArray([ 13, 11, 15, 5, 6, 1, 8, 12 ]));