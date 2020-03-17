// Combine Two Lists

/*
Algorithm
Take array1 and array2 of equal length as inputs
Declare output = []
- For index idx ranging between 0 and array1.length - 1
  - add array1[idx] to output
  - add array2[idx] to output
Return output
*/

function interleave(array1, array2) {
  let output = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    output.push(array1[idx]);
    output.push(array2[idx]);
  }
  return output;
}

console.log(interleave([1, 2, 3], ["a", "b", "c"]));
//interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]

// LS solution
function interleave(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}
