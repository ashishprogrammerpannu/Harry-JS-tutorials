console.log('Learning about time in javascript');
let newDate = new Date();
//  Sends the current date.

// newDate = new Date('September 5 2003 23:03:02');
console.log(newDate);

//  By this we can set a random date. This has a date format of mm/dd/yy and time format of hh/mm/ss;
/*
Getting informatin from date object 
*/

// newDate = newDate.getDate();
//  To get date of the date object.

// newDate = newDate.getDay()
//  To get the day of date object. Remember here also index starts from zero;

// newDate = newDate.getHours()
//  To get hours of the date object.

// newDate = newDate.getMinutes;
// To get minutes;

// newDate = newDate.getSeconds();
// To get seconds

// newDate = newDate.getTime();
// It will give the full time in millisecond of the date object from 1970;

// newDate = newDate.getFullYear();
// To get the year.

// newDate = newDate.getMonth();
// To get the month.
// console.log(newDate);

/*
Setting informatin from date object 
*/

newDate.setDate(14);
// sets the date.

newDate.setMonth(8);
// Sets the month.

newDate.setMinutes(34);
// Sets the minutes of time.

newDate.setSeconds(23);
//  Sets the seconds of the time.

// newDate = newDate.setTime();
//  This sets time in milliseconds.

newDate.setFullYear(2019,8,06);
// It will set date in yy/mm/dd format;

console.log(newDate);