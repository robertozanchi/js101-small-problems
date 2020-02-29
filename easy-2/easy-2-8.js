// 8. Odd Lists

/*
Problem
inputs:
- array

output:
- array with odd-position elements of input array

rules:
- odd positions are 1, 3, 5 and so on
- in 0-based index, position 1 is index 0, and so on
- if inout array is empty, output should be an empty array

Examples
[2, 3, 4, 5, 6] ==> [2, 4, 6]
[1] ==> [1]
[] ==> []

Data structures
 - arrays

Algorithm
- define function that takes array as argument
  - declare empty output array
  if input array is *not* empty
  - loop through input array
  - for every odd-position index, push element to output array
  return output array

*/

// Code

function oddities(array) {
  let outputArray = [];
  if (array.length !== 0) {
    // this is not necessary with condition '< array.length' in loop
    for (let pos = 0; pos < array.length; pos += 1) {
      if (pos % 2 === 0) {
        // instead of this, can increment pos += 2
        outputArray.push(array[pos]);
      }
    }
  }
  return outputArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// function oddities(array) {
//   let oddElements = [];
//   for (let idx = 0; idx < array.length; idx += 2) {
//     oddElements.push(array[idx]);
//   }
//   return oddElements;
// }
