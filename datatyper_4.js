console.log(`I am learning about data types in Javascript. Ashish's tuts.`);
/*
  Null rules
*/
let variable1 = null;
console.log(typeof variable1); // 'typeof'  is used to find the data type of any variable in JS.
/*
  Array rules
*/
let arr1 = [12, 23, null, `hello`, true];
console.log(typeof arr1);
// console.info(arr1);
console.table(arr1);
/*
  Object rules
*/
const firstObj = {
  type: "cool",
  isCoder: true,
};
console.log("");
firstObj.newType = "hot"; //appending key of firstObj.
console.log(firstObj.newType);

/*
  Date rules
*/

let date = new Date();
console.log(date);
console.log(typeof date);
