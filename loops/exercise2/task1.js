/*Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3;
var a = [5, -4.2, 3, 7], x = '';

for (var i = 0; i < a.length; i++) {
    if (e==a[i]) {
        x = "yes";
        break;
    } else {
        x = 'no';
    }
}
console.log(x);