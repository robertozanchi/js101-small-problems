// 2 Combining Arrays

/*
For the union() function
- Create empty results array
- Add first array's elements to results array
  - Call addArray() function
- Add second array's elements to results array
  - Call addArray() function
- Return results

For the addArray(array1, array2) function:
- Take array1, to be modified as argument
- Take array2, to be added to modified array as argument
- Loop through array1 and add elements to array1 that are not already in the array
- Return array1
*/

function union(arr1, arr2) {
  let unitedArr = [];

  addArr(arr1, unitedArr);
  addArr(arr2, unitedArr);

  return unitedArr;
}

function addArr(newArr, finalArr) {
  newArr.forEach((el) => {
    if (!finalArr.includes(el)) {
      finalArr.push(el);
    }
  });
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
