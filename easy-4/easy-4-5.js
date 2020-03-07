// Palindromic Strings (Part 2)

/*
Algorithm:
- convert string to small-cap, alphanumeric characters only
- check if string is palindrome with isPalindrome function

*/

function isPalindrome(string) {
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
}

function cleanUp(text) {
  let cleanText = "";

  for (let idx = 0; idx < text.length; idx += 1) {
    if (
      (text[idx] >= "a" && text[idx] <= "z") ||
      (text[idx] >= "A" && text[idx] <= "Z") ||
      (text[idx] >= "0" && text[idx] <= "9")
    ) {
      cleanText += text[idx];
    }
  }

  return cleanText;
}

function isRealPalindrome(text) {
  text = cleanUp(text.toLowerCase());
  return isPalindrome(text);
}

// LS solution
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
