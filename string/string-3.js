// Lettercase Counter

function letterCaseCount(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split("").forEach(char => {
    if (/[a-z]/.test(char)) {
      obj.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });
  return obj;
}

// LS solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

console.log("abCdef 123".match(/[a-zA-Z]/g));
