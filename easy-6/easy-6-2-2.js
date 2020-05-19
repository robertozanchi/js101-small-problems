// Double Char (Part 2)
// May 18, 2020

let doubleConsonants = function (string) {
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let stringArray = [];

  string.split("").forEach((char) => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      stringArray.push(char + char);
    } else {
      stringArray.push(char);
    }
  });

  return stringArray.join("");
};

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
