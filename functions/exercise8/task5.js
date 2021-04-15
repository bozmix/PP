/*
Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28
*/
(
    function (o){
        o = o + '';
        var d;
        d = parseInt(o, 10);
        console.log(d);
    }
)(034);