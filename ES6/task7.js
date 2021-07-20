/*
Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]
*/

const getNumberWithFive = arg => {
    let newArg = [];
    if (typeof arg === 'number' && Number.isInteger(arg)){
        let num = arg.toString();
        if (num.includes('5')) newArg.push(arg)
    }
    return newArg
}

console.log(getNumberWithFive(553));