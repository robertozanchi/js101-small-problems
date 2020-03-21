// Name Swapping

/*
Split input string into [firstName, lastName]
Return template literal with lastName, firstName

*/

// // One first name
// function swapName(name) {
//   let [first, last] = name.split(" ");
//   return `${last}, ${first}`;
// }

// console.log(swapName("Joe Roberts")); // "Roberts, Joe"

// Multiple names

function swapName(name) {
  let names = name.split(" ");
  return names.pop() + ", " + names.join(" ");
}

console.log(swapName("Karl Oskar Henriksson Ragvals"));
