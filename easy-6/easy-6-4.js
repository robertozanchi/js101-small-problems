// Get The Middle Character

/*
- if string has odd number characters,
  - find index of middle value
  - extract character in index position using [] notation
- if string has even number characters,
  - find indeces of two middle values
  - extract two chars with slice()
return extracted strings
*/

function centerOf(input) {
  let middle = Math.floor(input.length / 2);
  let result;
  if (input.length % 2 === 0) {
    result = input.slice(middle - 1, middle + 1);
  } else {
    result = input[middle];
  }
  return result;
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
