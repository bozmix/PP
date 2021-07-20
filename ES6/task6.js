/*
Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]
*/

const filterInteger = arr => {
    let newArr = [];
    arr.forEach(el => {
        if (Number.isInteger(el)) newArr.push(el)
    })
    return newArr
}

console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));