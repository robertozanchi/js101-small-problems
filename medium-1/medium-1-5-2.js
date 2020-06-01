// Word to Digit
// May 31, 2020

const NAMES_TO_NUMBERS = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
};

// let wordToDigit = function (message) {
//   return message
//     .split(/\b/)
//     .map((word) => {
//       if (Object.keys(numbers).includes(word)) {
//         return numbers[word];
//       }

//       return word;
//     })
//     .join("");
// };

// let wordToDigit = function (message) {
//   Object.keys(NAMES_TO_NUMBERS).forEach((key) => {
//     let re = new RegExp(key, "gi");
//     message = message.replace(re, NAMES_TO_NUMBERS[key]);
//   });

//   return message;
// };

function wordToDigit(words) {
  const NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return words.replace(/\w+/g, (word) => {
    const key = word.toLowerCase();
    return Object.keys(NUMBERS).includes(key) ? NUMBERS[key] : word;
  });
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
