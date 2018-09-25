//custom types

//try avoid creating functions with many parameters (write an object to replace parameters)


let drawPoint1 = (x,y) => {
    //...
}



//another type (inline annotation)
let drawPoint2 = (point: { x: number, y: number}) => {
    //...
}

drawPoint2({
    x:1,
    y:2
})


//another type (interface) better approach
//pascal naming convention --first letter of every word in the name of interface should be capitalized
interface Point {
    x: number,
    y: number
}
let drawPoint = (point: Point) => {
    //..
}
