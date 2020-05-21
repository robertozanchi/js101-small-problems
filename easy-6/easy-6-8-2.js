// Sequence Count
// May 21, 2020

let sequence = function (count, start) {
  let array = [];

  for (let pos = 1; pos <= count; pos += 1) {
    array.push(start * pos);
  }
  return array;
};

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []
