/* Write a function that takes two strings as arguments, determines the longer
of the two strings, and then returns the result of concatenating the shorter
string, the longer string, and the shorter string once again. You may assume
 that the strings are of different lengths.*/

/*
 Problem
 Inputs:
 - Two stings of different length

 Output:
 - A string

 Rules:
 - Input will be non-empty strings of different length
 - Output will concatenate strings as shorter+longer+shorter

 Examples:
 - "a", "bc" => "abca"

Data structures:
- Strings

Algorithm
- Define function to concatenate a shorter and a longer string
  and return final string
- Take string one as user input
- Take string two as user input
- Call function to concatenate the two strings
- Log result to console
*/

function concatenateTwo(shorter, longer) {
  console.log(shorter + longer + shorter);
}

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    concatenateTwo(string1, string2);
  } else {
    concatenateTwo(string2, string1);
  }
}

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"
