/*
Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']
*/

const filterStringArray = (arr, a = 'js') => {
    let output = [];
    arr.forEach(el => {
        if (el.toLowerCase().includes(a)) output.push(el)
    })
    return output
}

console.log(filterStringArray(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));