// Word to Digit

const words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function wordToDigit(sentence) {
  let parsed = [];
  sentence.split(" ").forEach((word) => {
    let position = words.indexOf(word);
    if (position === -1) {
      parsed.push(word);
    } else {
      parsed.push(digits[position]);
    }
  });
  return parsed.join(" ");
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
