/*
Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students&#39; names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.
*/
function grade(names, points){
    var grades = [];
    var grade;
    for (var i = 0; i < names.length; i++){
        if (points[i] <= 50){
            grade = " failed the exam";
        } else if (points[i] <= 60 && points[i] > 50){
            grade = " earned 6";
        } else if (points[i] <= 70 && points[i] > 60) {
            grade = " earned 7";
        } else if (points[i] <= 80 && points[i] > 70){
            grade = " earned 8";
        } else if (points[i] <= 90 && points[i] > 80){
            grade = " earned 9";
        } else if (points[i] > 90){
            grade = ' earned 10';
        }
        grades[i] = grade;
    }
    for (var i = 0; i < names.length; i++){
        console.log(names[i] + ' acquired ' + points[i] + ' points and' + grades[i] + '.');
    }
}
var a = ['Micahel', 'Anne', 'Frank', 'Joe', 'John', 'David', 'Mark', 'Bill'];
var b = [50, 39, 63, 72, 99, 51, 83, 59]
grade(a, b);