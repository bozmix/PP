/*Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var e = 78,
  p = 3,
  a = [2, -2, 33, 12, 5, 8],
  b = [],
  j = 0;

var end = 0;

/*if (p=a.length){
    end = a.length;
} else if (p<a.length||(p>(a.length+1))){
    end = a.length;
}
*/
if (p < a.length) {
  for (var i = 0; i < a.length; i++) {
    if (p <= a.length) {
      if (i !== p) {
        b[j] = a[i];
        j++;
      } else {
        b[j] = e;
        j++;
        b[j] = a[i];
        j++;
      }
    } 
  }
} else if (p===a.length){
    for (i=0; i<=a.length; i++){
        if (i<a.length){
            b[j]=a[i];
            j++;
        } else if (i===a.length){
            b[p]=e;
        }
    }
} else if (p>a.length){
            b =
          "Error!!! Position of given index is greater than the length of the array";
}
console.log(b);
