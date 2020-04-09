// Rotation (Part 1)

/*
Input
an array
Output
a new array, since we can't mutate the original array
Rules
if the input is not an array, return undefined
if the input is an empty array, return []
for a non-empty array, slice off the first element and append it to the end of the array

Algorithm
- if input is not array, return undefined
- else, input is array
  - if length = 0, return []
    - else rotate array
      let results = input array.slice()
      let firstElement = results.shift()
      results.push(firstElement)
    - return results
*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else {
    if (array.length === 0) {
      return [];
    } else {
      let results = array.slice();
      let firstElement = results.shift();
      results.push(firstElement);
      return results;
    }
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
