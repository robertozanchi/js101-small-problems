// Clean up the words

/*
Problem
input:
- a string

output:
- a string with all of the non-alphabetic characters replaced by spaces

rules:
- for one or more non-alphabetic characters in a row, replace with one space
- validation?

Examples
cleanUp("---what's my +*& line?");    // " what s my line "

Data
strings

Algoritm
- function with parameter string of type string
- set finalString = ""
- loop from 0 through string length -1
  - if !a <= string[i] <= z
    - if finalString[i - 1] === " "
      - continue
    finalString += " "
return finalString
*/

function cleanUp(string) {
  let cleanString = "";
  for (let idx = 0; idx < string.length; idx += 1) {
    if (!/^[A-Z]$/i.test(string.charAt(idx))) {
      if (cleanString.charAt(cleanString.length - 1) === " ") {
        continue;
      }
      cleanString += " ";
    } else {
      cleanString += string.charAt(idx);
    }
  }
  console.log(cleanString);
  return cleanString;
}
cleanUp("---what's my +*& line?"); // " what s my line "
