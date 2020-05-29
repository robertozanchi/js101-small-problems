// Staggered Caps (Part 2)
// May 28, 2020

let staggeredCase = function (text) {
  let chars = text.split("");
  let makeUpper = true;
  return chars
    .map((char) => {
      if (/[^a-z]/i.test(char)) {
        return char;
      } else if (makeUpper) {
        makeUpper = !makeUpper;
        return char.toUpperCase();
      } else {
        makeUpper = !makeUpper;
        return char.toLowerCase();
      }
    })
    .join("");
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
