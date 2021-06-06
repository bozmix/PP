/*
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
*/

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicate (a){
    var b = [];
    var c;
    a.forEach(function(el){
        a.forEach(function(el1){
            if (el !== el1){
                c = true;
            } else {
                c = false;
                //break;
            }
        })
        if (c){
            b.push(el);
        }
    })
    return b;
}

console.log(removeDuplicate(a));
