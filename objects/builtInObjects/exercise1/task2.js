/*
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]
*/

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicate (a){
    var b = [];
    var c = [];
    var d;
    b = a.sort(function(a,b){
        return a - b;
    });
    console.log(b);
    b.forEach(function(el){
        if (!c.includes(el)){
            c.push(el);
        }
    })
    return c;
}

console.log(removeDuplicate(a));
