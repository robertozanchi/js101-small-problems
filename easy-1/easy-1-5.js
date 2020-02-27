/* Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill
 to the console. You can ignore input validation and assume that the user will enter numbers. */

/*
Understand the problem
Inputs:
- Bill amount (number)
- Tip rate (number)
Output:
- Log the tip to console
- Log total bill amount to console
Rules:
- Tip is = bill amount * tip rate
- Total bill amount = bill amount + tip
- Tip rate is 0% or higher
- Bill amount is a positive number

Examples and test cases
- 10.00, 10% => $1.00 tip and $11.00 total bill amount

Data structure:
Convert user input (string) to numbers.

Algorithm:
- Take bill amount as input from user
- Take tip rate as input from user
- Calculate tip and total bill amount
- Log tip and bill amount to console
*/
const readline = require("readline-sync");

console.log("What is the bill?");
let bill = parseFloat(readline.question());

console.log("What is the tip percentage?");
let percentage = parseFloat(readline.question());

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
