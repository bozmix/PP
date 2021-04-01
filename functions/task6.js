/*
Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * *

*/
 function drawHorChart(a, b, c){
    var f = s = t = ''; 
    for (var i = 0; i < a; i++){
        f+='*';
    }
    for (var j = 0; j < b; j++){
        s+='*';
    }
    for (var k = 0; k < c; k++){
        t+='*';
    }
    return (console.log(f, ('\n'+s), ('\n'+t)));
}

 var a = 5, b = 2, c = 3;
 drawHorChart(a, b, c);
