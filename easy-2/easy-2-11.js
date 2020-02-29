// 11. Convert a Number to a String!

/*
Problem
inputs:
- non-negative integer value

output:
- string representation of the input integer

rules:
- may not use any of the standard conversion functions
- output string must be composed of numeric characters
- do not add + to string representation
- assume no empty string as input
- no need for validation

Examples
4321 ==> "4321"

Data structures
- None

Algorithm
- let DIGITS array = 10 "0"-"9" digits as strings
- define function with num as parameter
  - let result = ""
  - do
    - let remainder = num % 10;  this is the rightmost digit
    - num = Math.floor(num / 10);
    - result = DIGITS[remainder] + result;
  - while num > 0
  return result
*/

// Code

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);
  console.log(result);
  return result;
}

integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"
