// Array Average
// May 16, 2020

let average = function (array) {
  return parseInt(array.reduce((acc, curr) => acc + curr) / array.length, 10);
};

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
