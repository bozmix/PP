/*
Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1

Output: 0
*/
//ovo je na mnoooogo tezi nacin

var a = -5, b = -2, c = -6, d = 0, e = -1;
var result;
if(a>b){
    if(a>c){
        if(a>d){
            if(a>e){
                result=a;
            } else {
                result=e;
            }
        } else {
            if(d>e){
                result=d;
            } else {
                result=e;
            }
        }
    } else {
        if(c>d){
            if(c>e){
                result=c;
            } else {
                result=e;
            }
        } else if(d>e){
            result=d;
        } else {
            result=e;
        }
    }
} else {
    if(b>c){
        if(b>d){
            if(b>e){
                result=b;
            } else {
                result=e;
            }
        } else {
            if(d>e){
                result=d;
            } else {
                result=e;
            }
        }
    } else {
        if(c>d){
            if(c>e){
                result=c;
            } else {
                result=e;
            }
        } else {
            if(d>e){
                result=d;
            } else {
                result=e;
            }
        }
    }
}

console.log(result + " is the largest number");