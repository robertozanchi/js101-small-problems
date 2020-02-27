// Odd Numbers

// solution 1
function logOdd(limit) {
  for (let i = 1; i <= limit; i += 2) {
    console.log(i);
  }
}

logOdd(55);

// solution 2
let number = 0;
while (number < 100) {
  if (number % 2 === 1) {
    console.log(number);
  }
  number += 1;
}

// LS solution
// for (let number = 1; number < 100; number += 2) {
//   console.log(number);
// }
