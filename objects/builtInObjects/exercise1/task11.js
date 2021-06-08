/*
11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.
*/
function randomInteger (){
    return (Math.floor(Math.random() * 16 + 5));
}
randomInteger();

function randomInteger2(){
    return (Math.floor(Math.random() * 51 + 50));
}
randomInteger2();

function arrayOfRandomNumbers (n, f){
    var c =[];
    for (var i = 0; i < n; i++){
        c.push(f());
    }
    return console.log(c);
}

arrayOfRandomNumbers(10,randomInteger2);