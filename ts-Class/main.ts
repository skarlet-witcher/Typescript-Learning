//how to define class in our program

class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: '+ this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

/*
let point: Point;
point.draw(); //runtime error 

*/

//solution
//  let point: Point = new Point();

//cleaner
let point = new Point(); //object is an instance of class
point.x = 1;
point.y = 2;
point.draw();
