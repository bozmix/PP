/*
Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
function switchMinAndMax (a){
    var min = a[0];
    var index = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i]<min){
            min = a[i];
            index = i;
        }
    }
    var max = a[0];
    var maxindex = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i]>max){
            max = a[i];
            maxindex = i;
        }
    }
    var b = [];
    for (var i = 0; i < a.length; i++){
        if (i === index){
            b[i] = max;
        } else if (i === maxindex) {
            b[i] = min;
        } else {
            b[i] = a[i];
        }
    }
    return b;
}
var a = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
var min = switchMinAndMax(a);
console.log(min);

