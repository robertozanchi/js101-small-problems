// Lettercase Counter
// May 25, 2020

let letterCaseCount = function (text) {
  let letterCounts = {};

  letterCounts.lowercase = text.replace(/[^a-z]/g, "").length;
  letterCounts.uppercase = text.replace(/[^A-Z]/g, "").length;
  letterCounts.neither = text.replace(/[a-z]/gi, "").length;

  return letterCounts;
};

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
