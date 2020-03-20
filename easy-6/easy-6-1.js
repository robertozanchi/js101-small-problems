// Double Char (Part 1)

/*
Algorithm
- declare result = ""
- loop through input string, idx 0 to input.lenght - 1
- add input[idx] + input[idx] to result string
- return result string
*/

function repeater(input) {
  let result = "";
  for (let idx = 0; idx < input.length; idx += 1) {
    result += input[idx] + input[idx];
  }
  return result;
}

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
