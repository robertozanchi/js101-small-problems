// Fibonacci Numbers (Procedural)
// June 2, 2020

let fibonacci = function (num) {
  let result = 1;

  let twoBefore = 1;
  let oneBefore = 1;
  for (let count = 3; count <= num; count += 1) {
    result = twoBefore + oneBefore;
    twoBefore = oneBefore;
    oneBefore = result;
  }

  return result;
};

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
