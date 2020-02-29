// 10. Convert a String to a Signed Number!

/*
Problem
inputs:
- a string of digits with optional +/- sign

output:
- number as an integer

rules:
- +/- sign is optional
- if +, return positive integer
- if -, return negative integer
- no use of standard JS methods
- no input validation required
  - Assume all chars numeric
  - No + or - or invalid chars

Examples
"4321" ==> 4321
"+120" ==> 120
"-34" ==> -34

Data structures
- Object to convert string char to int
- Why? code that is easier to read, understand, and maintain.
- Alternative switch statement

Algorithm
- Define stringToInteger() function
  - take string as input
  - declare result = 0;
  - declare sign = 1;
  - if string begins with -,
    - sign = -1
    - string = substring from index 1
  - if string begins with +
    - string = substring from index 1
  - set units to 10 ** string length - 1
  - loop through string
    - for each char, use switch statement to get int
    - add int * units to result
    - divide units / 10
  - return result * sign
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

function stringToSignedInteger(input) {
  let result = 0;
  let sign = 1;
  if (input[0] === "-") {
    sign = -1;
    input = input.substring(1);
  } else if (input[0] === "+") {
    input = input.substring(1);
  }
  let units = 10 ** (input.length - 1);
  for (let pos = 0; pos < input.length; pos += 1) {
    result += units * CHAR_TO_INT[input[pos]];
    units /= 10;
  }
  return result * sign;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

console.log(typeof stringToSignedInteger("-570"));
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
