// Double Char (Part 1)
// May 18, 2020

let repeater = function (string) {
  let repeatedChars = "";

  string.split("").forEach((char) => {
    repeatedChars += char.repeat(2);
  });

  return repeatedChars;
};

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
