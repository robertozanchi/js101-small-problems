// 3. Multiplying Two Numbers

/*
Problem
Inputs:
- Two numbers

Output:
- Product of the inputs

Rules:
- Any input validation?

Examples
3, 5 => 15
-2, 4 => -8

Data structures
- Numbers

Algorithm
Function that returns product of two numbers

*/

// Code

function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}

console.log(multiply(5, 3) === 15); // logs true
