/* Write a program that asks the user to enter an integer greater
 than 0, then asks whether the user wants to determine the sum or
  the product of all numbers between 1 and the entered integer,
  inclusive.*/

/*
Problem (Understand the)
Input:
- Integer greater than 0
- Choice between sum or product
Output:
- Sum or product of all numbers between 1 and the entered integer
Rules:
- Add or multiply all integers in the range

Examples
(1, *) => 1 * 1 = 1
(1, +) => 1
(2, *) => 1 * 2 = 2
(2, +) => 1 + 2 = 3

Data
- Numbers

Algorithm
- Take number from user input
- Take operation as user input
 - calculate product or sum
    - Define functions for sum and product
    - Call to return sum or product
    - Log result to console
*/

//Code

const readline = require("readline-sync");

function computeSum(targetNum) {
  let total = 0;
  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }
  return total;
}

function computeProduct(targetNum) {
  let total = 1;
  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }
  return total;
}

function isInvalidNumber(number) {
  return (
    number.trim() === "" || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

console.log("Please enter an integer greater than 0:");
let integer = parseInt(readline.question(), 10);
while (isInvalidNumber(integer)) {
  prompt("Please provide a valid number");
  integer = parseInt(readline.question(), 10);
}

console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let operation = readline.question();

let result;
if (operation === "s") {
  result = computeSum(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`);
} else if (operation === "p") {
  result = computeProduct(integer);
  console.log(
    `The product of the integers between 1 and ${integer} is ${result}.`
  );
}
