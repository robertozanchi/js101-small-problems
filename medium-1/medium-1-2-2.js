// Rotation (Part 2)
// May 30, 2020

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

/*
- Split number into an array of digits, where digits are string values
  - Convert number to String
  - Use split() to convert into an array of single chars
- Separate left-side digits into sub-array that won't be rotated
  - Use slice on string
- Separate right-side digits into a sub-array that will be rotated
  - Use slice on string
- Rotate right-side sub-array using rotateArray 
  - Reassign right-side variable to return value of rotateArray
- Concatenate let-side array with rotated right-side array
  - Use concat
- Join digits array into string
- Convert string to number and return its value
*/

let rotateRightmostDigits = function (number, count) {
  let numAsStr = String(number);
  let digits = numAsStr.split("");

  let leftSideDigits = digits.slice(0, numAsStr.length - count);
  let rightSideDigits = digits.slice(-count);

  rightSideDigits = rotateArray(rightSideDigits);

  return Number(leftSideDigits.concat(rightSideDigits).join(""));
};

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
