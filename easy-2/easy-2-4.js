// 4. Squaring an Argument

/*
Problem
Input:
- A number

Output:
- The square of the number

Rules:
- NA

Example
3 => 9
-3 => 9
0 => 0

Data
- Numbers

Algorithm
Define function to take one number as input and return the square

*/

// Code

function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}

function square(number) {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
