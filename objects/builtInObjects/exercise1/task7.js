/*
7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).
*/
//b
function doesContainDigit (string){
    var output = '';
    for(var i = 0; i < string.length; i++){
        if (isFinite(parseInt(string.charAt(i))) ){
            output = "String contain number";
            break;
        } else {
            output = "String does not contain number";
        }
    }
    return output;
}
var sample = 'neki string bez broja';
console.log(doesContainDigit(sample));