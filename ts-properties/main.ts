//reduce redundant code about field
//getter and setter
//define property
//camel notation

class Point {
    //note : if parameter is public you have to use public
    //camel notation
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: '+ this.x + ', Y: ' + this.y);
    }

    get x(){  //property //get 和 set 最好同时出现 否则会失去部分功能
        return this._x;
    }
    set x(value){ //property
        if(value < 0)
            throw new Error('value cannot be less than 0');
        
            this._x = value;
    }
}
 
let point = new Point(1,2); 
point.draw();
//point.setX(10);
point.x = 10;  //maybe getter or setter or a combination of getter and setter
let a = point.x;