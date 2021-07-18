/*
Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']
*/

const capitalize = a => {
    let b = a.filter(el => typeof el === 'string');
    return b.map(el => el[0].toUpperCase() + el.slice(1));
}

console.log(capitalize(['hello', 'there', 'ES', 6]));