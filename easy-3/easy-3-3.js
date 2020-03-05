// Stringy Strings

/*
Problem
input:
- a positive integer

output:
- string of alternating '1's and '0's of length = the integer

rules:
- the output string should always start with 1

Examples
stringy(6);    // "101010"
stringy(7);    // "1010101"

Data
strings and string methods

Algorithm
- define function with parameter number
- declare output string as empty string
- loop through 0 to number - 1
  - for even numbers (incl 0) concat "1" to output string 
  - for off numbers concat "0" to output string
- return output string

*/

// Code

function stringy(number) {
  let result = "";
  for (let idx = 0; idx < number; idx += 1) {
    if (idx % 2 === 0) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}

console.log(stringy(11));

// // LS solution:
// function stringy(size) {
//   let result = "";
//   for (let idx = 0; idx < size; idx++) {
//     let number = ((idx % 2) === 0) ? 1 : 0;
//     result += number;
//   }
//   return result;
// };
