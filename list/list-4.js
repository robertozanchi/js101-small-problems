// Leading Substrings

/*
Algorithm
- declare empty array substrings
- for loop of char indexes 1 to string length
  - add subsgtring up to current index to the substrings array
- return substrings array
*/

function substringsAtStart(string) {
  let substrings = [];
  for (let idx = 1; idx <= string.length; idx += 1) {
    substrings.push(string.slice(0, idx));
  }
  return substrings;
}

// LS solution
function substringsAtStart(string) {
  return string
    .split("")
    .map((_, idx, stringArray) => stringArray.slice(0, idx + 1).join(""));
}

substringsAtStart("abc"); // ["a", "ab", "abc"]
substringsAtStart("a"); // ["a"]
substringsAtStart("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
