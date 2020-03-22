// Reverse It (Part 2)

/*
delcare empty results array
split string into array of words
for each word in array
  if word is 5 or more letters long
    reverse letters in word
  push word into resultds
return joined results array as strings
*/

function reverseWords(words) {
  let results = [];
  words = words.split(" ");
  words.forEach(word => {
    if (word.length > 4) {
      word = word
        .split("")
        .reverse()
        .join("");
    }
    results.push(word);
  });
  return results.join(" ");
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
