// All Substrings
// May 25, 2020

/*
- Declare empty results array
- Loop over characters of string
- For each character, take all substrings from char to end of string using substringsAtStart()
- Concatenate all substrings to results
- Return results
*/

let substringsAtStart = function (text) {
  let substrings = [];

  for (let idx = 1; idx <= text.length; idx += 1) {
    substrings.push(text.slice(0, idx));
  }

  return substrings;
};

let substrings = function (text) {
  let substrings = [];

  for (let idx = 0; idx < text.length; idx += 1) {
    let substring = text.slice(idx, text.length + 1);
    substrings = substrings.concat(substringsAtStart(substring));
  }

  return substrings;
};

console.log(substrings("abcde"));

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];
