// 7. Exclusive Or

/*
Problem
inputs:
- two operands

output:
- boolean.

rules:
- return true if only one operand is truthy. else, false.

Examples
5, 0 ==> true
1, 1 ==> false

Data structures
- NA

Algorithm
- if (operand1 && !operand2) === true ==> true
- if (!operand1) && operand2 === true ==> true
- else, return false

*/

// Code

function xor(operand1, operand2) {
  if (operand1 && !operand2) {
    return true;
  } else if (!operand1 && operand2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// function xor(value1, value2) {
//   if ((value1 && !value2) || (value2 && !value1)) {
//     return true;
//   }
//   return false;
// }
