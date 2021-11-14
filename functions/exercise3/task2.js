/*
Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22,'', undefined, 47, null]
*/

function mergeToString(a){
    var b = '';

    for (var i = 0; i < a.length; i++){
        
        if(a[i]!==undefined&&a[i]!==null&&a[i]!==Infinity&&(!isNaN(a[i]))){
            b+=a[i]+' ';
        }
    }
    return b;
}
 var result = mergeToString([NaN, 0, 15, false, -22,'', undefined, 47, null]);
 console.log(result, typeof(result));