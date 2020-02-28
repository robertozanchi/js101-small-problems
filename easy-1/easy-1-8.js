// Leap Years (Part 1)

/*
Problem
Inputs:
- Year as integer
Output:
- Boolean for whether year is Leap year
Rules:
- Leap year if evenly divisible by 400
- If not above, not leap year if evenly divisible by 100
- if not above, leap year if evenly divisible by 4
- Input validation: assume number? assume > 0?

Examples:
1600 => true
1500 => false
1616 => true

Data:
- Numbers

Algorithm:
- If year % 400 === 0 return true
- Else, if year % 100 === 0 return false
- Else, if year % 4 === 0 return true
*/

// const readline = require("readline-sync");

// console.log("What is the year?");
// let year = parseInt(readline.question(), 10);

function isLeapYear(year) {
  if (year % 400 === 0) {
    //return true;
    console.log(true);
  } else if (year % 100 === 0) {
    //return false;
    console.log(false);
  } else {
    //return year % 4 === 0;
    console.log(year % 4 === 0);
  }
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true
