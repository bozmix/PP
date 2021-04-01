/*Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****
*/

function drawSquare(a){
    var n ='';
    for (var i = 0; i < a; i++){
        for (var j = 0; j < a; j++){
            if (i===0||i===(a-1)){
                n+='*';
            }else if ((i>0&&i<(a-1))&&(j===0||j===(a-1))){
                n+='*';
            } else {
                n+=' ';
            }
        }
        n+='\n';
    }
    return n;
}

var result = drawSquare(9);
console.log(result);