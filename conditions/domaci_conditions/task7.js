/*Task 3 exercise
Write a conditional statement to
sort three numbers.

Sample numbers : 0, -1, 4

Output : 4, 0, -1
*/

var a = 0, b = -1, c = 4;
var result="";
if(a>b&&b>c){
    result=a + ", " + b + ", " + c;
} else if(a>b&&b<c){
    result=a + ", " + c + ", " + b;
    } 
if(b>a&&a>c){
    result=b + ", " + a + ", " + c;
} else if(b>a&&a<c){
    result=b + ", " + c + ", " + a;
}
if(c>a&&a>b){
    result=c + ", " + a + ", " + b;
} else if(c>a&&a<b){
    result=c + ", " + b + ", " + a;
}
console.log(result);