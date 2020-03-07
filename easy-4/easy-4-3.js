// When Will I Retire?

/*
Problem
inputs:
- user's age (integer)
- user's desired retirement age (integer)

output:
- logs user's retirement year and years left to work

Example
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data structures
numbers

Algorithm
- take user's current age as integer
- take user's retirement age as integer
- calculate difference between above ages
- calculate retirement year as current year + difference of ages
- log retirement year and years left
*/

// Code

const readline = require("readline-sync");

console.log("What is your age?");
let currentAge = parseInt(readline.prompt(), 10);

console.log("At what age would you like to retire?");
let retirementAge = parseInt(readline.prompt(), 10);

let currentYear = new Date().getFullYear();
let yearsLeft = retirementAge - currentAge;

let retirementYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);
