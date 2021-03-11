/*Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

var a = 20, b = 0, c, operation = "/";
switch (operation) {
    case "+":
        c = a + b;
        console.log(c);
        break;
    case "-":
        c = a - b;
        console.log(c);
        break;
    case "*":
        c = a * b;
        console.log(c);
        break;
    case "/":
        if (b!=0){
            c = a / b;
            console.log(c);
        } else {
            console.log("Error, division by 0");
        }
        break;
}