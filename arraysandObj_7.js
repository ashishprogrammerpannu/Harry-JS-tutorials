console.log('We are in arrays and objects');
let arr = [12,23,11,'Ashish',true];
console.log(arr);
console.log(arr.length);
//  length is property which will tell us about number of element in the array.
arr.push(false);
//  Push will add an element at the last.
arr.pop();
// It will remove an element from thet last.
arr.unshift(11)
// It will add an element in the starting
arr.shift();
//  It will remove an element from the start.
arr.includes(12);
// it will return a boolean value. true of includes, false if do not.
arr.indexOf('Ashish');
// It will tell index of an element from starting.
arr.lastIndexOf(true);
// It will give index of element which is present at the last.
arr.sort()
// It wil sort the element  in ascending order
arr.join(' ');
//  It is opposite of split method.
arr.reverse();
//  To reverse the array.
arr.slice(0,3)
//  From starting value to 1 less than second value. Returns an Array.
arr.splice(5)
//  Slice will return the selection and it will delete the selection.
arr.concat();
// combine two or more arrays
console.log(arr);

let firstObj = {
    Name:'Ashish',
    Isactive:true,
}
firstObj.nice = 'Yes';
//  We can also edit the objects in Javascript
console.log(firstObj.nice);
