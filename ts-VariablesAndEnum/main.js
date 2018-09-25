var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //enum exists, first variable is automatically zero
//each subsequent element gets an incremented value
var backgroundColor = Color.Red;
/*
let count = 5;
count = 'a';
*/
/*
let a: number;
a = 1;
a = true;
a = 'a';
*/ 
