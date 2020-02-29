// 2. Greeting a user

/*
Problem
inputs:
- string

output:
- string

Rules:
- if name ends with exclamation, log:
HELLO BOB. WHY ARE WE SCREAMING?
- If name does not end with exclamation, log:
Hello Bob.

Examples
- See rules

Data
- strings

Algorithm
Take name through user input
If string has exclamation mark as last char, print caps message
Else, print other message

*/

// CODE
const readline = require("readline-sync");

console.log("What is your name?");
let userName = readline.question();

if (userName.charAt(userName.length - 1) === "!") {
  userName = userName.substring(0, userName.length - 1);
  console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
}
