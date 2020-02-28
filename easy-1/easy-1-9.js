// Leap Years (Part 2)

/*
Problem
Inputs:
- Year as integer
Output:
- Boolean for whether year is Leap year
Rules:
- Before 1752, leap years is any year evenly divisible by 4. Else:
- Leap year if evenly divisible by 400
- If not above, not leap year if evenly divisible by 100
- if not above, leap year if evenly divisible by 4
- Input validation: assume number? assume > 0?

Examples:
1600 => true
1500 => false
1616 => true

Data:
- Numbers

Algorithm:
- If year < 1752: if year % 4 === 0 return true
- Else, if year % 400 === 0 return true
- Else, if year % 100 === 0 return false
- Else, if year % 4 === 0 return true
*/

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    console.log(true);
    //return true;
  } else if (year % 400 === 0) {
    //return true;
    console.log(true);
  } else if (year % 100 === 0) {
    //return false;
    console.log(false);
  } else {
    //return year % 4 === 0);
    console.log(year % 4 === 0);
  }
}
