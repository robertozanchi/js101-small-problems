// 10. Multiples of 3 and 5

/*
Problem
Inputs:
- Integer greater than 1

Output:
- Sum of all integers between 1 and the input that are multiples of 3 or 5;

Rules:
- Assume integer > 1 is given
- Sum should be inclusive of given number if multiple of 3 or 5;

Example
20 => 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 = 98
2 => 0 = 0
3 => 3 = 3
5 => 3 + 5 = 8

Algorithm
- set sum to 1
- loop through integfers between 1 and given number
  - if number multiple of 3 || multiple of 5 add to sum
- return sum

*/

//CODE
function multisum(input) {
  let sum = 0;
  for (let num = 1; num <= input; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  console.log(sum);
}

multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
