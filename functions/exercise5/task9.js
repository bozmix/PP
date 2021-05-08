/*
Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/
var NoOfCombinations = 0;
for (var i = 1; i <= 7; i++){
    for (var j = 1; j <= 7; j++){
        if (i !== j){
            console.log('(' + i + ',' + j + ')')
            NoOfCombinations++;
        }
    }
}
console.log('number of possible combinations is ' + NoOfCombinations);