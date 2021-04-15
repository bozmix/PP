/*
Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20
*/
(
    function (a, b){
        var surface = a * b;
        console.log (surface);
    }
)(4, 5);