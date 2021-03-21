/*Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/


//resenje
/*var a = [4, 2, 2, -1, 6];
var minimum = a[0];
var minimum2 = a[1];
var pom;

for (var i = 1; i < a.length; i++) {
  if (a[i] < minimum) {
    minimum = a[i];
    pom = a[0];
    a[0] = a[i];
    a[i] = pom;
  }
}
console.log(a);

for (var j = 1; j < a.length; j++) {
  if (a[j] < minimum2) {
    minimum2 = a[j];
  }
}
console.log(minimum2);
*/


var a = [4, 2, 2, -1, 6], min=a[0], c=a[0];

for (var i=0; i<a.length; i++) {
    if (a[i]<min) {
        min=a[i];
    }
}



console.log(c);