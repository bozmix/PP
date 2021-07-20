/*
Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
Write a function that prints out the names of persons older than 25. 
Write a function that check if there is a person older than 40.
Write a function that checks if all persons are older than 20.   
*/

const person1 = {
    name: 'John',
    age: 21
}

const person2 = {
    name: 'Jack',
    age: 24
}
 const person3 = {
     name: 'Jenniffer',
     age: 32
 }

const person4 = {
    name: 'Ashley',
    age: 41
}

let persons = [person1, person2, person3, person4];

const printOlderThan25 = arr => {
    arr.forEach(el => {
        if (el.age > 25){
            console.log(el.name)
        }
    })
}

const isOlderThan40 = arr => {
   return arr.some(el => el.age > 40)
}

const areAllOver20 = arr => {
    return arr.every(el => el.age > 20)
}

//printOlderThan25(persons)
console.log(isOlderThan40(persons));
//console.log(areAllOver20(persons));