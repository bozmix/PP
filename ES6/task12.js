/*
Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8
*/

const maxNum = arr => Math.max(...arr);

console.log(maxNum([2, 7, 3, 8, 5.4]));