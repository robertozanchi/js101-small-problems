// Staggered Caps (Part 1)
// May 27, 2020

/*
- Split the parameter string into array of chars
- Transform into array where chars in even index position are capitalized
  - Use map method with optional index parameter
  - Callback capitalizes elements with even index
- Join new array into string and return string
*/

let staggeredCase = function (text) {
  let chars = text.split("");
  return chars
    .map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("");
};

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 444 numbers")); // "IgNoRe 77 ThE 444 NuMbErS"
