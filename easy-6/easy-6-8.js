// Sequence Count

/*
input: count, startingNumber
let result = empty array 
for idx in range 1 to count
  push startingNumber
  startingNumber += startingNumber
return result
*/

function sequence(count, number) {
  let result = [];
  let finalNumber = number;
  for (let idx = 1; idx <= count; idx += 1) {
    result.push(finalNumber);
    finalNumber += number;
  }
  return result;
}

// // LS solution
// function sequence(count, startNum) {
//   let result = [];
//   for (let num = 1; num <= count; num++) {
//     result.push(num * startNum);
//   }
//   return result;
// }

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []
