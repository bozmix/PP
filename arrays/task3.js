/*Print all negative elements from the array [2, -4, 5, -2, -11].*/
var a = [2, -4, 5, -2, -11], x = "";

//console.log(a[1], a[3], a[4]);

for (i=0; i<a.length; i++) {
    if (a[i]<0) {
        x = x + "\t" + a[i];
    }
}

console.log(x);