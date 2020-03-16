// Combining Arrays

/*
Problem
- Assume single digits only - if not, there will be problems with sort()
because sort orders in alphsbetical not numerical order, e.g. [1, 100, 2]

Algorithm
- combine the two arrays into one with concat
- sort array elements in ascending value
- delcary empty results array
- array.forEach
  - add element to results if element not already included in results
return results
*/

function union(array1, array2) {
  const mergedArray = array1.concat(array2);
  mergedArray.sort();
  let results = [];
  mergedArray.forEach(element => {
    if (!results.includes(element)) {
      results.push(element);
    }
  });
  return results;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
