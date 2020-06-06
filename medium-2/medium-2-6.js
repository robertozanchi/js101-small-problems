// Sum Square - Square Sum
// June 5, 2020

/*
- Declare sum and sumOfSquares and initialize to 0 
- For each integer between 1 and parameter (included)
  - Add integer to sum
  - Add integer squared to sumOfSquares
- Return sum minum sumOfSquares
*/

let sumSquareDifference = function (num) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let idx = 1; idx <= num; idx += 1) {
    sum += idx;
    sumOfSquares += idx ** 2;
  }

  return sum ** 2 - sumOfSquares;
};

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
