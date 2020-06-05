// Tri-Angles
// June 5, 2020

function triangle(a, b, c) {
  if (a * b * c === 0 || a + b + c !== 180) return "invalid";

  if (a === 90 || b === 90 || c === 90) return "right";

  if (a < 90 && b < 90 && c < 90) return "acute";

  return "obtuse";
}
