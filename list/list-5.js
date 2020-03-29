// All Substrings

/*
Algorith
- declare empty results array
- loop through 1 to length of string
  - for substring from index to the end of string
      - get all substringsAtStart
      - concatenare substringsAtStart to results
- return results
*/

function substringsAtStart(string) {
  let substrings = [];
  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(0, idx));
  }
  return substrings;
}

function substrings(string) {
  let results = [];
  for (let idx = 0; idx <= string.length; idx += 1) {
    let substring = string.slice(idx, string.length);
    console.log(substring);
    results = results.concat(substringsAtStart(substring));
  }
  return results;
}

substrings("abcde");

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
