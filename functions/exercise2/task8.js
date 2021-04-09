/*
Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/

var prime = function (a){
    var result;
    if ((a%2===0||a%3===0||a%5===0||a%7===0)&&(a!==2&&a!==3&&a!==5&&a!==7)){
        result = 'Given number is not prime';
    } else {
        result = 'Given number is prime';
    }
    return result;
}

var result = prime(37);
console.log(result);