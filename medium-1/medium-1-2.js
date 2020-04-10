// Rotation (Part 2)

/*

Algorithm
- Convert number to string
- split leftmost portion and right portion
- split rightmost portion to array
- rotate right portion using rotateArray
- concatenate left array to rotated right array
- join array to string
- return string converted to number
*/

function rotateString(string) {
  return string.slice(1) + string[0];
}

function rotateRightmostDigits(digits, count) {
  let string = String(digits);
  [left, right] = [
    string.slice(0, string.length - count),
    string.slice(string.length - count),
  ];

  return Number(left + rotateString(right));
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
