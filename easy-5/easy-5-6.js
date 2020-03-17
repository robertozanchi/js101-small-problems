// Multiplicative Average

/*
Input:
- array of integers

Output:
- string

Rules:
- multiplies all of the integers together and divide by number of elements
- output string string repredents the value rounded to three decimal places

Algorithm
- Declare finalProduct = 1;
- for each of the elements of the array
  - set finalProduct to finalProduct * current element
- convert number to float with 3 decimals
- return string
*/

function multiplicativeAverage(numbers) {
  let finalProduct = 1;
  numbers.forEach(element => {
    finalProduct *= element;
  });
  return (finalProduct / numbers.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
