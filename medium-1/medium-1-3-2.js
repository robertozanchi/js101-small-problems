// Rotation (Part 3)
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

let rotateRightmostDigits = function (number, count) {
  let numAsStr = String(number);
  let digits = numAsStr.split("");

  let leftSideDigits = digits.slice(0, numAsStr.length - count);
  let rightSideDigits = digits.slice(-count);

  rightSideDigits = rotateArray(rightSideDigits);

  return Number(leftSideDigits.concat(rightSideDigits).join(""));
};

/*
- Initialize  variable max, the maximum rotation, to number of digits of the argument number
- Repeatedly call rotateRightmostDigits(number, count) until maximum roation is achieved
  - Initialize count to max inside a for loop 
  - Assign number to the return value of rotateRightmostDigits
  - Decrement count by 1 at each iteration
- Return number
*/

let maxRotation = function (number) {
  let max = String(number).length;

  for (let count = max; count > 1; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
};

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
