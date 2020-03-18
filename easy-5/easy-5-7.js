// Multiply Lists

/*
declare multiplied = []
loop through index idx of array1, 0 through array1.lengh - 1
  for each idx, add array1[idx] * array2[idx] to multiplied
return multiplied

*/
function multiplyList(array1, array2) {
  let multiplied = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    multiplied.push(array1[idx] * array2[idx]);
  }
  return multiplied;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
