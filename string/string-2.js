// Delete Vowels

const VOWELS = "aeiouAEIOU";

// function removeVowels(words) {
//   return words.map(word => {
//     return word
//       .split("")
//       .filter(char => !VOWELS.includes(char))
//       .join("");
//   });
// }

function removeVowels(words) {
  return words.map(word =>
    word
      .split("")
      .filter(char => !VOWELS.includes(char))
      .join("")
  );
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
