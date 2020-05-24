// Sum Of Digits
// May 23, 2020

/*
- Convert number to string
- Split string into array of characters
- Loop over array, convert each element into number
- Sum all individual digits
- Return total sum 
*/

let sum = function (number) {
  digitsArray = String(number).split("");
  return digitsArray.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue)
  );
};

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
