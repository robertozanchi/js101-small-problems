// Reverse Number

/*
Algorithm:
- Convert number to string
- Convert string to array
- Reverse array
- Join array into string
- Convert string to int
*/

function reverseNumber(number) {
  number = String(number)
    .split("")
    .reverse()
    .join("");
  return Number.parseInt(number, 10);
}

// // LS solution
// function reverseNumber(number) {
//   let numberStringArray = String(number).split('');
//   let reversedStringedNum = numberStringArray.reverse().join('');
//   return parseInt(reversedStringedNum, 10);
// }

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
