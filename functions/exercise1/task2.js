/*Write a program that checks if a given number is odd.*/

var a = 2;

function isOdd (a) {
    if (a%2===1){
        return 'yes';
    } else {
        return 'no';
    }
}

console.log(isOdd(a));