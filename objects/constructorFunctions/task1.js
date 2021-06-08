/*
Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!
*/

function Coffe (name, strength, flavour, milk, sugar){
    this.name = name;
    this.strength = strength;
    this.flavour = flavour;
    this.milk = milk;
    this.sugar = sugar;
}

var nesscaffe = new Coffe ('nesscaffe', 'strong', 'caramel', 'yes', 'much');

console.log(nesscaffe);