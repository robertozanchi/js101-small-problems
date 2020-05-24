// Alphabetical Numbers
// May 23, 2020

/*
- Create an object where keys are numbers and values are the words for each number
- Use sort function to sort array in place
  - Callback return value references first letter of value strings in the object
  -  Sort so that if "a" < "b" returns -1, and so on
- Return sorted object
*/

const NUMBER_WORDS = [
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
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

let alphabeticNumberSort = function (arr) {
  arr.sort((a, b) => {
    if (NUMBER_WORDS[a] < NUMBER_WORDS[b]) {
      return -1;
    } else if (NUMBER_WORDS[a] > NUMBER_WORDS[b]) {
      return 1;
    } else {
      return 0;
    }
  });

  return console.log(arr);
};

alphabeticNumberSort([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
