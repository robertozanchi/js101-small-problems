// Palindromic Numbers

/*
Algorithm
- convert number to string
- check if string is palindrome
- return true or false
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

function isPalindromicNumber(number) {
  number = String(number);
  return isPalindrome(number);
}

console.log(isPalindromicNumber(34543));
