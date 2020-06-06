// Longest Sentence
// June 6, 2020

/*
- Split text into sentences array containing individual sentences
  - Use regex match method
- Declare position of longest sentence = 0
- Declare maxLength = 0 
- Loop through indexes of sentences array
- If length of sentence > maxLength
  - maxLength = length of sentence
  - position = index
- Return sentences[position] and maxLength
*/

let longestSentence = function (text) {
  let sentences = text.match(/\w.*?[.!?]/g); // LS solution

  //let sentences = text.split(/(?<=[.!?])\s/); // Wendy Teo
  // Wendy uses positive lookbehind is (?<=text)

  let longestPosition = 0;
  let maxLength = 0;

  for (let idx = 0; idx < sentences.length; idx += 1) {
    let sentenceLength = sentences[idx].split(/\s/).length;
    if (sentenceLength > maxLength) {
      maxLength = sentenceLength;
      longestPosition = idx;
    }
  }

  console.log(sentences[longestPosition]);
  console.log(`The longest sentence has ${maxLength} words.`);
};

/*
Note the use of String.prototype.match. Some people try to solve this problem with String.prototype.split, 
but split usually loses punctuation unless you use some advanced regex features that few people understand. 
String.prototype.match, on the other hand, doesn't lose the punctuation. 
The challenge, though, is describing a regex that matches each sentence.

Let's go over the pattern used in the solution. 
The solution leverages the lazy quantifier (*?) to restrict the match to the shortest possible string: a single sentence. 

Given the pattern, a match:
\w - starts with any word character
.*? - may contain any number of characters in the middle (even zero characters)
[.!?] - ends when the first ., !, or ? after the starting word character is reached
If you haven't used regex before, check out our Introduction to Regular Expressions book.
*/

let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this.";

let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
