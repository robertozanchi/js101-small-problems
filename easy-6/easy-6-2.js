// Double Char (Part 2)

function doubleConsonants(input) {
  let result = "";
  for (let idx = 0; idx < input.length; idx += 1) {
    if ("aeiou".includes(input[idx]) || !/^[a-zA-Z]+$/.test(input[idx])) {
      result += input[idx];
    } else {
      result += input[idx] + input[idx];
    }
  }
  return result;
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
