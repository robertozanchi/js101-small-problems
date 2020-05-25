// Palindromic Substrings
// May 25, 2020

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

let palindromes = function (text) {
  return substrings(text).filter((word) => {
    return word === word.split("").reverse().join("") && word.length > 1;
  });

  // let palindromes = [];

  // substrings(text).forEach((substring) => {
  //   if (
  //     substring === substring.split("").reverse().join("") &&
  //     substring.length > 1
  //   ) {
  //     palindromes.push(substring);
  //   }
  // });

  // return palindromes;
};

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
