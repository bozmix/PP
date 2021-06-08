/*
9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds
*/
function calculateHours(departure, arrival){
    var departure1 = new Date('01 jan 2007 ' + departure + ' gmt');
    var parsedDeparture = Date.parse(departure1);
    var arrival1 = new Date('01 jan 2007 ' + arrival + ' gmt');
    var parsedArrival = Date.parse(arrival1);
    var difference = parsedArrival - parsedDeparture;
    var hours = Math.floor(difference / 3600000);
    var minutes = Math.floor((difference % 3600000)/60000);
    var seconds = Math.round(((difference % 3600000) % 60000)/1000);
    return console.log(hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds');
}
calculateHours('8:22:13', '11:43:22');