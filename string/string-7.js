// Staggered Caps (Part 2)

function staggeredCase(sentence) {
  let chars = sentence.split("");
  let index = 0;
  for (let idx = 0; idx < chars.length; idx += 1) {
    let char = chars[idx];
    if (/[a-zA-Z]/.test(char)) {
      if (index % 2 === 0) {
        chars[idx] = char.toUpperCase();
      } else {
        chars[idx] = char.toLowerCase();
      }
      index += 1;
    }
  }
  return chars.join("");
}

// LS solution
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(function(char) {
      if (char.match(/[a-z]/i)) {
        let newChar;
        if (needUpper) {
          newChar = char.toUpperCase();
        } else {
          newChar = char.toLowerCase();
        }

        needUpper = !needUpper;
        return newChar;
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
