// Alphabetical Numbers

// const ORDER = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
//   "eleven",
//   "twelve",
//   "thirteen",
//   "fourteen",
//   "fifteen",
//   "sixteen",
//   "seventeen",
//   "eighteen",
//   "nineteen"
// ];

// function alphabeticNumberSort(array) {
//   array.sort((a, b) => {
//     if (ORDER[a] > ORDER[b]) {
//       return 1;
//     } else if (ORDER[a] < ORDER[b]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(array);
// }

// alphabeticNumberSort([
//   0,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19
// ]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Using an object to map
const ORDER = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five"
};

// function alphabeticNumberSort(array) {
//   array.sort((a, b) => {
//     if (ORDER[a] > ORDER[b]) {
//       return 1;
//     } else if (ORDER[a] < ORDER[b]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log(array);
// }

let sorting = function(a, b) {
  if (ORDER[a] > ORDER[b]) {
    return 1;
  } else if (ORDER[a] < ORDER[b]) {
    return -1;
  } else {
    return 0;
  }
};

function alphabeticNumberSort(array) {
  array.sort((a, b) => sorting(a, b));
  console.log(array);
}

alphabeticNumberSort([0, 1, 2, 3, 4, 5]);
