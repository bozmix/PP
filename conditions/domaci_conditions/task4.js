/* Task1 exercise
Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

Sample numbers: 3, -7, 2

Output: The sign is - */

var a = 3, b = -7, c = 2;

var result = a*b*c;

console.log(result);

if(result<0){
    console.log("The sign is -")
} else if(result===0){
    console.log("The result is 0, there is no sign")
} else if(result>0){
    console.log("The sign is +")
}