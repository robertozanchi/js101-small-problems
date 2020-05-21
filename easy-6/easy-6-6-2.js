// Counting Up
// May 20, 2020

let sequence = function (number) {
  let resultsArray = [];

  for (let num = 1; num <= number; num += 1) {
    resultsArray.push(num);
  }

  return resultsArray;
};

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
