// Searching 101

/*
Problem
inputs:
- six numbers from the user

output:
- string (message logged to console )


rules:
- accept non-integers?
- do input validation?

Examples
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

Data structures
array for the message logged to console showing order of inputs
and to check for inclusion
boolean - true if sixth number is among the first five numbers, otherwise false

Algorithm
- create empty array 'numbers'
- get first 5 numbers through input from user
- add each of the first 5 numbers to array
- get last number from user
- check if array includes last number - true or false
- Log appropriate message to console

*/

// Code
const readline = require("readline-sync");

let numbers = [];

function getNumber() {
  let number = Number(readline.prompt());
  numbers.push(number);
}

console.log("Enter the 1st number:");
getNumber();

console.log("Enter the 2nd number:");
getNumber();

console.log("Enter the 3rd number:");
getNumber();

console.log("Enter the 4th number:");
getNumber();

console.log("Enter the 5th number:");
getNumber();

console.log("Enter the last number:");
let lastNumber = Number(readline.prompt());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
}

// Further Exploration using the Array.prototype.some method

// E.g. checks whether an element is greater than 25
const greater = element => element > 25;

console.log(numbers.some(greater));
// expected output: true
