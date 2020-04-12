c = console;
c.log();

console.log("We are in string modifiqation");
let str1 = " Hello Ashish";
console.log(str1.length);
// .length is module to get the total no. of charaters in a string
console.log(str1[1]);
// It is same as array indexing stuff
console.log(str1.concat("!"));
//  The concat func basiclly do the stuff done by plus symbol
console.log(str1.toUpperCase());
//  This do every case of text uppercase.
console.log(str1.toLowerCase());
// It is opposite to the toUpperCase() stuff
console.log(str1.indexOf("Ashish"));
// I don't think it should be explained.
console.log(str1.lastIndexOf("h"));
//  It is the opposite of indexOf() of function
console.log(str1.charAt(7));
//  This function basically gives us the character at the indexing value.
console.log(str1.startsWith(" "));
// No more comments on this easy topics.
console.log(str1.endsWith("ashish"));
// Ok
console.log(str1.includes("Ashish"));
//  It's easy. It's tells us about whether.
c.log(str1.substring(1, 3));
//  substring() will give us a part of string from starting value(firstArguement) upto the no. before second index value(secondArguement-1);
// str1.split();
//  This function will divide the satring into the array 
console.log(str1.slice(0,5));
//  This will take firstArguement as starting value and secondArguement as no. elements from the starting point.
console.log(str1.replace('Ashish','Ash'));
//  It will replace the first value with the second value.


