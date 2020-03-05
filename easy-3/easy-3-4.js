// Fibonacci Number Location By Length

/*
Problem
inputs:
- integer, for the number of digits of the Fibonacci series number sought

output:
- Index of first Fibonacci number whose length matches the input integer

rules:
- Use 1-based index
- Return first Fibonacci number who length matches input int
- Assume input is an integer = or > than
- No need for input validation?

Examples
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

Data structures
Numbers

Algorithm
- Define function with inputInteger
- declare firstNumber = 0
- declare secondNumber = 1
- declare index = 1
- while currentNumber.length < inputInteger
  - let currentNumber = firstNumber + secondNumber;
    if currentNumber.length === inputInteger
    - return index
  - firstNumber = secondNumber
  - secondNumber = currentNumber
  - index += 1

*/

// Code

function findFibonacciIndexByLength(targetNumber) {
  let firstNumber = 0;
  let secondNumber = 1;
  let index = 1;
  let currentNumber = 0;
  while (currentNumber.toString().length < targetNumber) {
    currentNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = currentNumber;
    index += 1;
  }
  console.log(index);
  return index;
}

// function findFibonacciIndexByLength(length) {
//   let first = 1;
//   let second = 1;
//   let index = 2;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     index += 1;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);

//   return index;
// }

findFibonacciIndexByLength(2); // 7
findFibonacciIndexByLength(10); // 45
findFibonacciIndexByLength(16); // 74
