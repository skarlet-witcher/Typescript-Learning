//modules 
//export: the class is visible outside this file
export class Point {
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X: '+ this.x + ', Y: ' + this.y);
    }
}