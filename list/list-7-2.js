// Sum of Sums
// May 24, 2020

/*
- Declare total and initialize to 0
- Loop over index of array elements, from 0 to length - 1
- For each index, sum elements up to that index
- Add sum to total
- Return total
*/

// let sumOfSums = function (arr) {
//   let total = 0;
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     for (let idx2 = 0; idx2 <= idx; idx2 += 1) {
//       total += arr[idx2];
//     }
//   }

//   return total;
// };

let sumOfSums = function (arr) {
  let total = 0;

  Object.keys(arr).forEach((limit) => {
    for (let idx = 0; idx <= limit; idx += 1) {
      total += arr[idx];
    }
  });

  return total;
};

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
