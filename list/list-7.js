//

/*
- loop through array (for loop or forEach)
  - sum all elements of array up to given index
  - add sum to total sum
- return total sum
*/

const SUM = (accumulator, currentValue) => accumulator + currentValue;

function sumToIndex(array, index) {
  let sliced = array.slice(0, index + 1);
  return sliced.reduce(SUM, 0);
}

function sumOfSums(array) {
  let grandSum = 0;
  array.forEach((_, index) => {
    grandSum += sumToIndex(array, index);
  });

  console.log(grandSum);
}

// // LS solution
// function sumOfSums(numbers) {
//   return numbers
//     .map((_, idx) =>
//       numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
//     )
//     .reduce((sum, value) => sum + value);
// }

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35
