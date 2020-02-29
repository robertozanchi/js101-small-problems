// 9. Convert a String to a Number!

/*
Problem
inputs:
- a string of digits

output:
- number as an integer

rules:
- no use of standard JS methods
- no input validation required
  - Assume all chars numeric
  - No + or - or invalid chars

Examples
"4321" ==> 4321

Data structures
- Object to convert string char to int
- Why? code that is easier to read, understand, and maintain.
- Alternative switch statement

Algorithm
- Define stringToInteger() function
  - take string as input
  - declare result = 0;
  - set units to 10 ** string length
  - loop through string
    - for each char, use switch statement to get int
    - add int * units to result
    - divide units / 10
  - return result
*/

// Code

const CHAR_TO_INT = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToInteger(input) {
  let result = 0;
  let units = 10 ** (input.length - 1);
  for (let pos = 0; pos < input.length; pos += 1) {
    result += units * CHAR_TO_INT[input[pos]];
    units /= 10;
  }
  return result;
}

console.log(stringToInteger("3421") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// // LS solution
// let arrayOfDigits = string.split("").map(char => DIGITS[char]);
// let value = 0;
// arrayOfDigits.forEach(digit => (value = 10 * value + digit));
// return value;
