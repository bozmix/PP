/*Task 2 exercise
Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1

Output: 0
*/

var a = -5, b = -2, c = -6, d = 0, e = -1;
var result;

if(a>b&&a>c&&a>d&&a>e){
    result=a;
} else{
    if(b>c&&b>d&&b>e){
    result=b;
    } else{
        if(c>d&&c>e){
            result=c;
        } else{
            if(d>e){
                result=d;
            }else{
                result=e;
            }
        }
    }
}

console.log(result + " is the largest number");