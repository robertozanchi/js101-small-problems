// How old is Teddy?

function getRandomInt(min, max) {
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Teddy is ${age} years old!`);
}
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range/1527834

getRandomInt(20, 120);
