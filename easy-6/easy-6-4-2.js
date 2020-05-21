// Get The Middle Character
// May 19, 2020

let centerOf = function (string) {
  let length = string.length;
  let halfPoint = Math.floor(length / 2);

  if (length % 2 === 1) {
    return string[halfPoint];
  } else {
    return string.slice(halfPoint - 1, halfPoint + 1);
  }
};

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
