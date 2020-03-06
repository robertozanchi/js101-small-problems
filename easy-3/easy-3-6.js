// Madlibs

const readline = require("readline-sync");

console.log("Enter a noun:");
let noun = readline.prompt();

console.log("Enter a verb:");
let verb = readline.prompt();

console.log("Enter an adjective:");
let adjective = readline.prompt();

console.log("Enter an adverb:");
let adverb = readline.prompt();

console.log(
  `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
);
console.log(
  `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`
);
console.log(`The ${noun} ${noun} ${verb}s up ${adjective} Joe's turtle.`);
