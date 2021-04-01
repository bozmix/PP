/*Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

var s = "apreciate";

function howManyAs (a){
    var n = 0;
    for (var i = 0; i<a.length; i++){
        if (a[i]==='A'||a[i]==='a'){
            n += 1;
        }
    }
    return n;
}

var m = howManyAs(s);
console.log(m);

