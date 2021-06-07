/*
6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.
*/
var products = [
    {name: 'apples', price: 100},
    {name: 'milk', price: 80},
    {name:'bananas', price: 150}
];
function totalPrice (a){
    var total = 0;
    a.forEach(function(el){
        total += el.price;
    })
    return total;
}
console.log(totalPrice(products));

function averagePricePerProduct(a){
    var average = 0;
    var count = 0;
    a.forEach(function(el){
        count += el.price;
        average = count/a.length;
    })
    return average;
}
console.log(averagePricePerProduct(products));

function printMostExpensive (a){
    var max = 0;
    var name = '';
    a.forEach(function(el){
        if (el.price > max){
            max = el.price;
            name = el.name;
        }
    })
    return console.log(name.toUpperCase());
}

printMostExpensive(products);