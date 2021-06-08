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
//a
function isInCapitals (s){
    if (s === s.toUpperCase()){
        return console.log('String is in upper case.');
    } else {
        return console.log('String is not in upper case');
    }
}

isInCapitals('THIS IS IN CAPTaLS');
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

//c.
function isValidHexColor(s){
    var output = '';
    if (s.length !== 6){
        return console.log('String is not valid hexadecimal color.');
    }
    for (var i = 0; i < s.length; i++){
        if(['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'].includes(s[i].toLowerCase())){
             output = 'String is valid hexadecimal color.';
        }else {
           output = 'String is not valid hexadecimal color.';
           break;
        }
    }
    return console.log(output);
};

isValidHexColor('ffa000');

/*
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
*/
function checkInterval(n){
    if (n >= 1900 && n <= 2018){
        return console.log('Number is in interval.');
    } else {
        return console.log('Number is not in interval.');
    }
}
checkInterval(2019);

/*
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).
*/
function validator(){
    o = {
        stringValidator: isInCapitals,
        passwordValidator: doesContainDigit,
        colorValidator: isValidHexColor,
        yearValidator: checkInterval
    };
    return o;
}
console.log(validator());