// Multiplicative Average
// May 16, 2020

function multiplicativeAverage(arr) {
  let product = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  return console.log(String((product / arr.length).toFixed(3)));
}

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
