// Staggered Caps (Part 1)

function staggeredCase(sentence) {
  let chars = sentence.split("");
  for (let idx = 0; idx < chars.length; idx += 1) {
    let char = chars[idx];
    if (idx % 2 === 0) {
      chars[idx] = char.toUpperCase();
    } else {
      chars[idx] = char.toLowerCase();
    }
  }
  return chars.join("");
}

// LS solution
function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 444 numbers")); // "IgNoRe 77 ThE 444 NuMbErS"
