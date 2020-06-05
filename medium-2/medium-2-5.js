// Next Featured Number Higher than a Given Value
// June 5, 2020

/*
- Declare a function called featured() with argument integer argument num
- If num is equal to or greater than largest possible featured, return "error"
- Else, find next featured number calling getNextFeatured() function
  - loop through integers starting from num to largest possible featured (included)
  - if integer is odd number && multiple of 7 && has all of its digits occuring exactly once each, return number
    - call digitsRecurOnce()
      - convert numner to string
      - convert string to array of characters (ie. digits as 1-char strings)
      - return new Set(array)).size === array.length;
- Return the next featured number 
*/

let digitsRecurOnce = function (num) {
  let digits = String(num).split("");
  return new Set(digits).size === digits.length;
};

let getNextFeatured = function (num, max) {
  for (let int = num + 1; int <= max; int += 1) {
    if (int % 2 === 1 && int % 7 === 0 && digitsRecurOnce(int)) {
      return int;
    }
  }
};

let featured = function (num) {
  const MAX_FEATURED = 9876543201;

  if (num >= MAX_FEATURED)
    return "There is no possible number that fulfills those requirements.";

  return getNextFeatured(num, MAX_FEATURED);
};

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
