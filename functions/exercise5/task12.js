/*
Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9
*/

function greatestCommonDivisor (a, b){
    var smaller = a;
    var divisor = 1;
    if (a < b){
        smaller = a;
    } else {
        smaller = b;
    }

    for (var i = 1; i <= smaller; i++){
        if (a % i === 0 && b % i === 0){
            divisor = i;
        }
    }
    return console.log(divisor);
}

greatestCommonDivisor(192, 42);
greatestCommonDivisor(81,9);