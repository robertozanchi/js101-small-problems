// Multiply All Pairs
// May 23, 2020

/*
- Create empty result array
- Loop over first array, then for each element
- Loop over second array, then for each element
- Push product of current elements of 1st and 2nd array to result
- Return result array
*/

let multiplyAllPairs = function (arr1, arr2) {
  let result = [];

  arr1.forEach((el1) => {
    arr2.forEach((el2) => {
      result.push(el1 * el2);
    });
  });

  return result.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
