// Right Triangles

function triangle(sideLength) {
  for (let idx = 1; idx <= sideLength; idx += 1) {
    console.log(" ".repeat(sideLength - idx) + "*".repeat(idx));
  }
}

triangle(5);
triangle(9);

// function triangle(height) {
//   let spaces = height - 1;
//   let stars = 1;
//   while (height > 0) {
//     console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
//     spaces -= 1;
//     stars += 1;
//     height -= 1;
//   }
// }
