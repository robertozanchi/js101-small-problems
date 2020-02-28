// 11. ASCII String Value

/*
Problem
Input:
- A string of any length

Output:
- Sum of the ASCII values of every character in the string.

Rules:
- Take character's ASCII value from String.prototype.charCodeAt()
- Empty string returns 0

Examples
asciiValue('');                   // 0
asciiValue('a');                  // 97

Algorithm
- if string.length = 0, return 0
- else, set asciiSum = 0
- for non-0-length string, loop through string index
- for index position in the array, add ASCII value to asciiSum
- return asciiSum

*/

//CODE

function asciiValue(string) {
  if (string.length === 0) {
    console.log(0);
    return 0;
  } else {
    let asciiSum = 0;
    for (let i = 0; i < string.length; i += 1) {
      asciiSum += string.charCodeAt(i);
    }
    console.log(asciiSum);
    return asciiSum;
  }
}
asciiValue("Four score"); // 984
asciiValue("Launch School"); // 1251
asciiValue("a"); // 97
asciiValue(""); // 0
