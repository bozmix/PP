/*
Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
*/

const getEvenElements = arr => {
    let newArr = [];
    arr.forEach(el => {
        if (el % 2 === 0) newArr.push(el)
    })
    return newArr
}

console.log(getEvenElements([6, 11, 9, 0, 3]));