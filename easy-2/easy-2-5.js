// 5. Arithmetic Integer

/*
Problem
Input:
- Two positive integers

Output:
- The results of addition, subtraction, product, quotient, remainder, and power

Rules:
- Any two positive integers, no validation required

Examples
23, 17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103

Data
Print to console a string using template literals for numbers and operations.

Algorithm:
Prompt user for two positive integers
Print string with template literal for each operation:
- sum
- subtraction
- product
- quotient
- remainder
- power
*/

// code

const readline = require("readline-sync");

console.log("What is the first positive integer?");
let firstInt = Number(readline.prompt());

console.log("What is the second positive integer?");
let secondInt = Number(readline.prompt());

console.log(`${firstInt} + ${secondInt} = ${firstInt + secondInt}`);
console.log(`${firstInt} - ${secondInt} = ${firstInt - secondInt}`);
console.log(`${firstInt} * ${secondInt} = ${firstInt * secondInt}`);
console.log(`${firstInt} / ${secondInt} = ${firstInt / secondInt}`);
console.log(`${firstInt} % ${secondInt} = ${firstInt % secondInt}`);
console.log(`${firstInt} ** ${secondInt} = ${firstInt ** secondInt}`);
