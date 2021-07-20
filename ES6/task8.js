/*
Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5
*/

const returnIndex = arr => {
    let output = ``;
    arr.forEach(el => {
        if (el > 10) output += ` ${arr.indexOf(el)},`;
    })
    return output
}

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]))