/*
3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

function hasOddNumberOfElements (a){
    if (a.length % 2 !== 0){
        return true;
    } else {
        return false;
    }
}
console.log(hasOddNumberOfElements([1, 2, 9, 2, 1]));

function numOfElLessThanMiddle (a){
    var middEl;
    var counter = 0;
    if (hasOddNumberOfElements(a)){
        middEl = a[Math.floor(a.length/2)];
        a.forEach(function(el){
            if(el < middEl){
                counter++;
            }
        })
    } else {
        throw new Error ('Array has even number of elements');
    }
    return counter;
}

var b = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
console.log(numOfElLessThanMiddle(b));