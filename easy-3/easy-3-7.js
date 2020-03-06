// Double Doubles

/*
Algorithm
- if number is even-length && first half digits = second half digits
  - return number as-is
- else, return number multiplied by two
*/

// Code

function twice(number) {
  let string = number.toString();
  let middle = Math.floor(string.length / 2);
  if (
    string.length % 2 === 0 &&
    string.substring(0, middle) === string.substring(middle)
  ) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   let stringNumber = String(number);
//   let center = Math.floor(stringNumber.length / 2);
//   let leftNumber = stringNumber.substring(0, center);
//   let rightNumber = stringNumber.substring(center);

//   return leftNumber === rightNumber;
// }

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
