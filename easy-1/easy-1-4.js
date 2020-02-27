const readline = require("readline-sync");
const SQUARE_FT_PER_M = 10.7639;

console.log("What's the input type? Enter 'feet'or 'meters'.");
let input = readline.question();

console.log("Enter the length of the room:");
let roomLength = readline.question();
roomLength = parseInt(roomLength, 10);

console.log("Enter the width of the room:");
let roomWidth = readline.question();
roomWidth = parseInt(roomWidth, 10);

if (input === "meters") {
  let sqMeters = (roomLength * roomWidth).toFixed(2);
  let sqFeet = (sqMeters * SQUARE_FT_PER_M).toFixed(2);
  console.log(
    `The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`
  );
} else if (input === "feet") {
  let sqFeet = (roomLength * roomWidth).toFixed(2);
  let sqMeters = (sqFeet / SQUARE_FT_PER_M).toFixed(2);
  console.log(
    `The area of the room is ${sqFeet} square feet (${sqMeters} square meters).`
  );
}
