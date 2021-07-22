/*
Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes
*/

const areAllPositive = arr => arr.every(el => el > 0);

console.log(areAllPositive([3, 11, 9, 5, 6]));
