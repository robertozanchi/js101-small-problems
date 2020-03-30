// Swap Case

/*
- split string into array of characters
- map array to new array where
  - if char is uppercase letter, return lowercase
  - if cahr is lowercase letter, return uppercase
  - else, return letter as it is
- join array into string
- return string
*/

function swapCase(string) {
  return string
    .split("")
    .map(char => {
      if (/[a-z]/.test(char)) {
        return char.toUpperCase();
      } else if (/[A-Z]/.test(char)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
