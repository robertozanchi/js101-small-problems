// 6. The End Is Near But Not Here

/*

Problem
inputs:
- a string of two or more words

output:
- the second last word in the string

rules:
- any input string will contain 2+ words
- a word is a sequence of non-blank characters
- assume inout string is always valid

Examples
"last word" ==> "last"

Data structure
array of words, because the order matters

Algorith
- define function
  - input string as the argument
  - split string into array of words
  - return second last word using index
- call function on strings

*/

// Code

function penultimate(sentence) {
  let words = sentence.split(" ");
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
