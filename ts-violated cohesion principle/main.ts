//violated cohesion principle
interface Point2 {
    x: number,
    y: number,
    draw: () => void  //void function
}

let drawPoint = (point: Point2) => {
    //...
}

drawPoint({   //high cohesion
    x: 1,
    y: 2
})

//solution
let getDistance = (pointA: Point2, pointB: Point2) => {
    //...
}

/*

Class:
    Groups variables (properties) and functions (methods) 
    that are highly related

*/


//use class
class Point {
    x: number;
    y: number;
    
    draw() {
        // ..
    }

    getDistance(another: Point) {
        //..
    }
}
