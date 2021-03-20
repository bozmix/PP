/*Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

&lt; 60% F
&lt; 70% D
&lt; 80% C

&lt; 90% B
&lt; 100% A

8. Write a program that uses console.log to print all the numbers*/

var marks = [80, 77, 88, 95, 68];
var avg=0, sum=0, mark='';
for (var i=0; i<marks.length; i++){
    sum+=marks[i];
}
avg = sum/(marks.length);

if (avg<=60){
    mark='F';
} else if (avg<=70&&avg>60){
    mark="D";
} else if (avg<=80&&avg>70) {
    mark='C';
} else if (avg<=90&&avg>80) {
    mark='B';
} else {
    mark='A'
}
/*switch (avg){
    case (avg<=60):
        mark='F';
        break;
    case (avg<=70&&avg>60):
        mark='D';
        break;
    case (avg<=80&&avg>70):
        mark='C';
        break;
    case (avg<=90&&avg>80):
        mark='B';
        break;
    case (avg<=100&&avg>90):
        mark='A';
        break;
}*/
console.log(avg);
console.log("The average mark is "+mark);