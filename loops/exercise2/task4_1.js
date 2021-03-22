/*Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

var a = [4, 2, 2, -1, 6];
var min = a[0], x = 0, b = 0;

for (var i = 0; i < a.length; i++) {    //this loop gives the minimum and its index
    if (a[i]<min){
        min=a[i];
        x = i;
    }
}
if (x===a.length-1){                    //this gives index to start looking for the element next to minimum
    b = a[x-1];                         //variable b must not take the minimum value which is determined by upper 'for' loop
} else {                                //so I want to give value to variable b different from minimum which index is x
    b = a[x+1];                         //but if minimum is the last number of array we want our variable b to have value of previous element
}                                       //else it can have any other value different from minimum

for (var i = 0; i < a.length; i++) {
    if (a[i]!==min&&a[i]<b){
        b=a[i];
    }
}

console.log('minimum element of array is ' + min + ' and first element larger than minimum is ' + b);