/*
10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
b. Write a function that calculates the distance between two points in the space.
*/
function Point (x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}

//d = ((x2 - x1)2 + (y2 - y1)2 + (z2 - z1)2)1/2
var point1 = new Point (3, 5, 1);
var point2 = new Point (4, 6, 2);

function distance (p1, p2){
    var d = Math.sqrt(Math.pow((p2.x - p1.x),2) + Math.pow((p2.y - p1.y),2) + Math.pow((p2.z - p1.z),2));
    return console.log(d);
}

distance(point1, point2);