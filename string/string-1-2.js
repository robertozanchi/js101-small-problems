// Uppercase Check
// May 25, 2020

/*
- Select alphabetic chars in input string as new string
- Turn string into array of chars
- Use every() method to check if every char is uppercase
  - char is uppercase if strictly equal to char.toUpperCase()
Return true or false based on every() return value
*/

let isUppercase = function (text) {
  text = text.replace(/[^a-z]/gi, "");

  return text.split("").every((char) => char === char.toUpperCase());
};

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
