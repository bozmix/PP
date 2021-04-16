/*
Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/
 function secMin (a){
     var min = a[0];
     var index = 0;
     for (var i = 0; i < a.length; i++){
         if (a[i]<min){
             min = a[i];
             index = i;
         }
         
     }
     if (index === a.length-1){
        var secmin = a[index - 1];
     } else if (index === 0){
        var secmin = a[index + 1];
     } else {
         var secmin = a[index + 1];
     }
    
     for (i = 0; i < a.length; i++){
     if (a[i]>min&&a[i]<secmin){
         secmin = a[i];
     }
    }
     return secmin;
 }
 console.log(secMin([4, 2, 0, -1, 6]));