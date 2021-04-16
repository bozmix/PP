/*
Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

var checkElement = function (a, e){
    var o = '';
    for (var i = 0; i < a.length; i++){
        if (a[i] === e){
            o = 'yes';
            break;
        } else {
            o = 'no';
        }
    }
    return o;
}

console.log(checkElement([5, -4.2, 18, 7], 3))