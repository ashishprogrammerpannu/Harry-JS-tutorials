console.log('we are chaning typeof variabls');
let var1 = 13;
// var1 = String(var1);
//  String() is func to convert any data into string.
var1 = var1.toString();
// Specifies a radix for converting numeric values to strings. This value is only used for numbers.
var1 = Number(var1)
//  Number() func is used to convert a data into number.
var1 = parseInt(var1);
var1 = parseFloat(var1);

var1 = var1.toFixed(10);
//  toFixed() is function to show the number of digits after the floating point.

console.log(var1 , typeof var1);