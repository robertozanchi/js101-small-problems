// Halvsies

/*
Problem
inputs:
- array

outputs:
- one array containing two arrays

rules:
- put first half of the original array elements in the first element of output array
- put second half of the original array elements in the second element of output array
- If the original array contains an odd number of elements, place the middle element in the first half array
- If input array is empty, return array with two empty arrays al elements

Examples
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

If even-numbered array
[1, 2, 3, 4, 5, 6] has indexes 0, 1, 2, 3, 4, 5; length = 6 and halves 0-2, 3-5
[1, 2, 3, 4, 5, 6, 7, 8] has indexes 0, 1, 2, 3, 4, 5, 6, 7; length = 8 and halves 0-3, 4-7

[1, 2, 3, 4, 5] has indexes 0, 1, 2, 3, 4; length = 5 and halves 0-2, 3-4
[1, 2, 3] has indexes 0, 1, 2; length = 3 and halves 0-1, 2



Data structures
- Arrays

Algorithm
- declare output as array [[],[]]
- if input array is empty, return output array as it is
- else:
  - declare array length as num
  - if num is even
    - put array.slice(0, num) in first half of output and array.slice(num) in second half
  - else if array has odd number of elements calculate mid-point as length 
  if num is odd number
    - put array.slice(0, ceil(num)) in first half of output and array.slice(ceil(num)) in second half
- return output array
*/

function halvsies(numbers) {
  let output = [[], []];
  let halfPoint = numbers.length / 2;
  if (numbers.length % 2 === 0) {
    output[0] = numbers.slice(0, halfPoint);
    output[1] = numbers.slice(halfPoint);
  } else {
    output[0] = numbers.slice(0, Math.ceil(halfPoint));
    output[1] = numbers.slice(Math.ceil(halfPoint));
  }
  return output;
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}
