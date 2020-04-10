// Stack Machine Interpretation

/*
Algorithm
- Initialize stack to [] and register to 0
- Split program input string into array
- For each instruction
  - if instruction is type number,
    - assign register to number
  else 
    - execute operation on stack using switch statement
*/

let digits = [
  "-9",
  "-8",
  "-7",
  "-6",
  "-5",
  "-4",
  "-3",
  "-2",
  "-1",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function minilang(program) {
  let stack = [];
  let register = 0;
  let instructions = program.split(" ");
  instructions.forEach((step) => {
    if (digits.includes(step)) {
      register = Number(step);
    } else {
      switch (step) {
        case "PUSH":
          stack.push(register);
          break;
        case "ADD":
          register = register += stack.pop();
          break;
        case "SUB":
          register -= stack.pop();
          break;
        case "MULT":
          register *= stack.pop();
          break;
        case "DIV":
          register = Math.floor(register / stack.pop());
          //Pop a value from the stack and divide it into the register value, storing the integer result in the register.
          break;
        case "MOD":
          register = Math.floor(register % stack.pop());
          break;
        case "POP":
          register = stack.pop();
          break;
        case "PRINT":
          console.log(register);
          break;
      }
    }
  });
}

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 MOD MULT PRINT");
// 12

minilang("5 PUSH POP PRINT");
// 5

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
