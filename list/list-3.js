// Multiply All Pairs

/*
Algorithm
declare empty pairProduct array to hold products of pairs
loop through first array indexes with for loop
  loop for second array indexes with for loop
  push firstArray[outer loop index] * secondArray[inner loop index] to pairProduct array
sort pairProduct in ascending numerical order using sort()
return pairProduct
*/

function multiplyAllPairs(arr1, arr2) {
  let pairProduct = [];
  for (let idx1 = 0; idx1 < arr1.length; idx1 += 1) {
    for (let idx2 = 0; idx2 < arr2.length; idx2 += 1) {
      pairProduct.push(arr1[idx1] * arr2[idx2]);
    }
  }

  return pairProduct.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

// //LS solution
// function multiplyAllPairs(array1, array2) {
//   let products = [];
//   array1.forEach(item1 => {
//     array2.forEach(item2 => {
//       products.push(item1 * item2);
//     });
//   });
//   return products.sort((item1, item2) => item1 - item2);
// }
