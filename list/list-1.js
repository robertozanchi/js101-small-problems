// Sum Of Digits

/*
Algorithm
- convert number to string
- convert string to list of digits with split()
- set total to 0
- add each list element to total, after converting from str to num
- return total
*/

function sum(number) {
  let list = number.toString().split("");
  let total = 0;
  list.forEach(element => {
    total += Number(element);
  });
  return total;
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45

// // LS solution
// function sum(number) {
//   return String(number)
//     .split("")
//     .reduce((accum, digit) => accum + Number(digit), 0);
// }
