// Triangle Sides
// June 4, 2020

/*
- Check if any of the conditions for invalidity is met
- If so, return "invalid"
- If all sides are equal, return "equilateral"
- else if a === b || b === c || a === c, return "isosceles"
- else, return "scalene"
*/

let triangle = function (a, b, c) {
  let sides = [...arguments].sort((a, b) => a - b);
  if (sides[0] + sides[1] < sides[2] || sides[0] === 0) {
    return "invalid";
  }

  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || a === c) return "isosceles";
  return "scalene";
};

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
