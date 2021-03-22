/*Write a program to sum the multiples of 3 and 5 under 1000.*/

var x=0;
for (var i=0; i<1000; i++) {
    if (i%3===0&&i%5===0) {
        x+=i;
        //console.log("number "+i+" is multiple of 3 and 5 and sum with previous such number is "+x+"\n");
    }
}
console.log(x);