// Triangle Sides

function triangle(a, b, c) {
  let orderedSides = Object.values(arguments).sort((a, b) => a - b);
  let [shortest, middle, longest] = orderedSides;

  if (shortest === 0 || shortest + middle <= longest) return "invalid";

  if (shortest === middle && middle === longest) {
    return "equilateral";
  } else if (shortest === middle || middle === longest) {
    return "isosceles";
  }

  return "scalene";
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
