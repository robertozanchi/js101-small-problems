// Multiply Lists
// May 17, 2020

function multiplyList(array1, array2) {
  return array1.map((element, index) => element * array2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
