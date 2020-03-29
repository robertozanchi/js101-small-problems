// Palindromic Substrings

/*
Algorithm
- split string into words separated by space
- declare empty results array
- for each word
  - concatenate output of substrings(string) to results
- filter results to keep words longer than 2 and === to their reverse
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
    results = results.concat(substringsAtStart(substring));
  }
  return results;
}

function palindromes(string) {
  // let results = [];
  // string.split(" ").forEach(word => {
  //   results = results.concat(substrings(word));
  // });

  let results = substrings(string);

  let filtered = results.filter(
    word =>
      word.length > 1 &&
      word ===
        word
          .split("")
          .reverse()
          .join("")
  );

  console.log(filtered);
  return filtered;
}

//palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
