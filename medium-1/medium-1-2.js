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

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;

  if (array.length === 0) return [];

  let results = array.slice();
  let firstElement = results.shift();
  results.push(firstElement);
  return results;
}

function rotateRightmostDigits(digits, count) {
  let string = String(digits);
  [left, right] = [
    string.slice(0, string.length - count),
    string.slice(string.length - count),
  ];
  right = rotateArray(right.split("")).join("");
  return Number(left.concat("", right));
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
