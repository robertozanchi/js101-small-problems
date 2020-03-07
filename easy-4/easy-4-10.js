// Letter Swap

/*
- split string into array of words
- switch letters for each word in array with .forEach or .map
  - let newWord;
  - if word.length === 1
    - newWord = word;
  if word.length === 2
    - newWord = word[1] + word[0];
  else
    - newWord = word[word.length - 1] + word.substring (1, word.length - 1)
     + word[0]
- re-join words in array into a single string
*/

// Code

function swap(text) {
  let words = [];
  text.split(" ").forEach(word => words.push(switchLetters(word)));
  console.log(words.join(" "));
}

function switchLetters(word) {
  if (word.length === 1) {
    return word;
    // } else if (word.length === 2) {
    //   return word[1] + word[0];
  } else {
    return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  }
}

// LS solution
// function swap(words) {
//   let wordsArray = words.split(" ");

//   for (let idx = 0; idx < wordsArray.length; idx += 1) {
//     wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
//   }

//   return wordsArray.join(" ");
// }

// function swapFirstLastCharacters(word) {
//   if (word.length === 1) {
//     return word;
//   }

//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// }

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"
