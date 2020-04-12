// Tri-Angles

function triangle(a, b, c) {
  if (a * b * c === 0 || a + b + c !== 180) return "invalid";

  if (a === 90 || b === 90 || c === 90) return "right";

  if (a < 90 && b < 90 && c < 90) return "acute";

  return "obtuse";
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
