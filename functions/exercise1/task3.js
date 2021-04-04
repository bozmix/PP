/*Write a program that checks if a given number is a three digit long number.*/

var a = 123;

function isThreeDigit(a) {
    if (a>99&&a<1000){
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(isThreeDigit(a));