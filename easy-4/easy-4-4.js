// Palindromic Strings (Part 1)

/*
Algorithm
- take input string
- split string into two halves
  - if even length, split in half
  - if odd length, add middle char to both halves
- reverse one half
  - convert to array, reverse array, and rejoin
- compare. if both halves equal, return true, else false
*/

// Code

function isPalindrome(text) {
  let firstHalf;
  let secondHalf;
  if (text.length % 2 === 0) {
    let middle = text.length / 2; // Example, string of length 6: 3
    firstHalf = text.substring(0, middle); // index 0, 1, 2
    secondHalf = text.substring(middle); // index 3, 4, 5
  } else {
    let middle = Math.floor(text.length / 2); // Example, string of length 5: 2
    firstHalf = text.substring(0, middle + 1); // index 0, 1, 2
    secondHalf = text.substring(middle); // index 2, 3, 4
  }

  secondHalf = secondHalf
    .split("")
    .reverse()
    .join("");

  return firstHalf === secondHalf;
}

// LS solution
function isPalindrome(string) {
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Madam")); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome("356653")); // true
