// Running Totals

/*
Problem
rules:
- assume array contains all valid numbers

Algorithm
- take input array
- declare totalsArray = []
- for index between 0 and array.length - 1
  - totalsArray.push(array[index] + last element of array)
return totalsArray
*/

// Code

function runningTotal(inputArray) {
  let resultsArray = [];
  for (let idx = 0; idx < inputArray.length; idx += 1) {
    if (idx === 0) {
      resultsArray.push(inputArray[idx]);
    } else {
      let toAdd = resultsArray[resultsArray.length - 1] + inputArray[idx];
      resultsArray.push(toAdd);
    }
  }
  console.log(resultsArray);
  return resultsArray;
}

// LS solution
function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }
  console.log(resultArray);
  return resultArray;
}

// Spencer Brainard
function runningTotal(array) {
  let sum = 0;
  return array.map(num => (sum += num));
}

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
