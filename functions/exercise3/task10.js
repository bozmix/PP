/*
Write a program to find the most frequent item of an array.
[3, 'a';, 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function theMostFrequent (a){
    
    for (var i = 0; i < a.length; i++){
        var j = i + 1;
        var counter = 0;
        var e = [];
        for (j; j < a.length; j++){
            if (a[i] === a[j] && a[i] !== e[i]){
                e[i] = a[i];
                counter +=1;
            }
        }
    }
    return 
}