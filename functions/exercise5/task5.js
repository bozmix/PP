/*
(skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/
 function sortDesceding (a){
    var temp = a[0];
    var j = 0;
    var b = [];
    while (j < a.length){

        for (var i = 0; i < a.length; i++){
            if (a[i] >= temp){
                temp = a[i];
                index = i;
            }
        }
        b[j] = temp;
        for (var k = 0; k < a.length; k++){
            if (k === index){
                a[k] = '';
            } else {
                a[k] = a[k];
            }
        }
        j++;
        for (var l = 0; l < a.length; l++){
            if (a[l] !== ''){
                temp = a[l];
                break;
            }
        }
    }
    return b;
 }
var a = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
 console.log(sortDesceding(a));