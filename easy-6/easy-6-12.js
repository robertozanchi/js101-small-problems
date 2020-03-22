// Matching Parentheses?

/*
declare parensBalance = 0
for index idx 0 to string.length - 1
  if char === "(" 
    add 1 to parensBalance
  if char === ")"
    subtract 1 from parensBalance 
  if parensBalance < 0 
    return false 
return parensBalance === 0;
*/

function isBalanced(string) {
  let parensBalance = 0;
  for (let idx = 0; idx < string.legth; idx += 0) {
    if (string[idx] === "(") {
      parensBalance += 1;
    } else if (string[idx] === ")") {
      parensBalance -= 1;
    }
    if (parensBalance < 0) {
      return false;
    }
  }
  return parensBalance === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
