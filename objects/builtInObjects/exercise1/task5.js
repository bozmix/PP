/*
5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.
*/
//a.
function findLessThan (a, el){
    var output = [];
    a.forEach(function(e){
        if (e < el){
            output.push(e);
        }
    })
    return output;
}
console.log(findLessThan([2, 3, 8, -2, 11, 4], 6));

/*b.
Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]
*/

function findWords (a){
    var output = [];
    var c = 0;
    a.forEach(function (el){
        c = el.slice(0,3).toLowerCase().indexOf('pro');
        if(c === 0){
            output.push(el);
        }
    })
    return output;
}
console.log(findWords(['JavaScript', 'Programming', 'fun', 'product']));

/*
c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.
*/
function giveMeLessNums (a, el, f){
    return f(a, el);
}

console.log(giveMeLessNums([2, 3, 8, -2, 11, 4], 6, findLessThan));

function filterWordsWithPro(a, f){
    return f(a);
}

console.log(filterWordsWithPro(['JavaScript', 'Programming', 'fun', 'product', 'PRofessional'], findWords));