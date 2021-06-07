/*
8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days
*/

function daysTillMyBirthday(d){
    var input = new Date(d);
    var parsedInput = Date.parse(input);
    var myBirthday = new Date('03 Oct');
    var parsedBirthday = Date.parse(myBirthday);
    var difference = parsedBirthday - parsedInput;
    var numOfDays = difference/86400000;
    return console.log(numOfDays);
}
daysTillMyBirthday('30 sep');