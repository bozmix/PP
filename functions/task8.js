/*Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/

var a = [2, 4, 7, 8, 7, 7, 1], e = 7;

function numOfApp (a, e) {
    var s = 0;
    for (var i = 0; i < a.length; i++){
        if (e === a[i]){
            s +=1; 
        }
    }
    return s;
}

console.log(numOfApp(a, e));