// Rotation (Part 3)

/*

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

function maxRotation(number) {
  let digits = String(number).length;
  for (let count = digits; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
