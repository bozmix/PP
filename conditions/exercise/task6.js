/*
Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

var f=0, c;

if(typeof f === "undefined"){
    f=(9*c/5)+32;
    console.log(c + "°C is " + f + " °F");
} else {
    c=(f-32)*5/9;
    console.log(f + "°F is " + c + "°C");
}
