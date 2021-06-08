/*
Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false
*/
function isPrime (a){
    var result;
    if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0){
        result = false;
    } else {
        result = true;
    }
    return console.log(result);
}

isPrime(17);
isPrime(15);