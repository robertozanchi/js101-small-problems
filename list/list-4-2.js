// Leading Substrings
// May 23, 2020

/*
- Declare results array and initialize to empty
- For number num in range 1 to (array.length)
  - Access substring with string.slice(0, num)
  - Push string slice to results array
- Return results array
*/

let substringsAtStart = function (text) {
  let substrings = [];

  for (let idx = 1; idx <= text.length; idx += 1) {
    substrings.push(text.slice(0, idx));
  }

  return substrings;
};

console.log(substringsAtStart("abc")); // ["a", "ab", "abc"]
console.log(substringsAtStart("a")); // ["a"]
console.log(substringsAtStart("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
