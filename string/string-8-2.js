// How long are you?
// May 28, 2020

/*
- Declare a results variable and intialize it as an empty array
- Split input string into array of words
- For each word in words array
  - Create a string concatenating word + space + word length
  - Add this string to results array using push method
- Return the results array
*/

let wordLengths = function (text) {
  text = text || "";
  let result = [];

  text.split(" ").forEach((word) => {
    result.push(`${word} ${word.length}`);
  });

  return result;
};

console.log(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []
