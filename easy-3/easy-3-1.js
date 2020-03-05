// ddaaiillyy ddoouubbllee

/*
Problem
inputs:
- string

output:
- string with all consecutive duplicates of a char collapsed

rules:
- duplicates can be more than one
- keep only on char for 2 or more consecutive duplicates

Examples
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('ggggggggggggggg');            // "g"

Data
- strings

Algorithm
- Define function crunch
  - let result = ""
  - loop through string indexes:
    - if current char = last char of result, skip
    - else, add char to result string
  return result

  */

// Code

function crunch(stringToCrunch) {
  let crunchedString = "";
  for (let val = 0; val < stringToCrunch.length; val += 1) {
    if (stringToCrunch === "") {
      return "";
    } else if (
      stringToCrunch[val] === crunchedString.charAt(crunchedString.length - 1)
    ) {
      continue;
    } else {
      crunchedString += stringToCrunch[val];
    }
  }
  return crunchedString;
}

// function crunch(text) {
//   let index = 0;
//   let crunchText = "";

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
console.log(crunch("ddaaiillyy ddoouubbllee"));
console.log(crunch("4444abcabccba"));
console.log(crunch("ggggggggggggggg"));
console.log(crunch("a"));
console.log(crunch(""));
