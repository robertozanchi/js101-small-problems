// Reverse It (Part 2)
// May 21, 2020

/*
- create empty result array
- convert string to array of words
- if word has 5 or more chars
  - reverse order of chars and append word to result
    - split word into array of chars, reverse, and join
- else, 
  - append word to result
- return result 
*/

let reverseWords = function (text) {
  let result = [];

  text.split(" ").forEach((word) => {
    if (word.length >= 5) {
      result.push(word.split("").reverse().join(""));
    } else {
      result.push(word);
    }
  });

  return result.join(" ");
};

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
