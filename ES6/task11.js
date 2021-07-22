/*
Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48
*/

const product = arr => {
    let output = 1;
    arr.every(el => output *= el);
    return output
}

console.log(product([2, 8, 3]));