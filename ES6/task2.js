/*
Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only
    */

let products = [{ name: "Banana", price: 120.23 }, { name: "Orange", price: 100 }];
let newProducts = [];

for(let i = 0; i < products.length; i++){
    newProducts[i] = {};
    newProducts[i].name = products[i].name;
    newProducts[i].price = products[i].price;
}



const calculateSaleTax = (arr) => {
    const newArr = arr.map(el => el.price *= 1.2);
    return arr;
}
const getTaxOnly = (arr) => {
    const newArr = arr.map(el => el.price *= 0.2);
    return newArr;
}

console.log(calculateSaleTax(newProducts));
console.log(getTaxOnly(products));
