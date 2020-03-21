/*
delare empty results array = []
for num in range 1 to input (includes)
 - append mnum to results 
return results 
*/

function sequence(int) {
  let results = [];
  for (let num = 1; num <= int; num += 1) {
    results.push(num);
  }
  return results;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
