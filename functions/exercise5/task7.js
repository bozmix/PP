/*
Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ 'M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A' ]
Output: AnStJoJoDaMa
*/

function takeFirstTwoletters (a){
    var output = '';
    for (var i = 0; i < a.length; i++){
        if (typeof(a[i]) == 'string' && a[i].length >= 2){
            for (var j = 0; j < 2; j++){
                output += a[i][j];
            }
        }
    }
    return console.log(output);
}

var a = [ 'M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A' ];
takeFirstTwoletters(a);