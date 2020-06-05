// let a = 1;

// function bla(x) {
//   x = 2;
//   console.log(x);
// }

// bla(a);
// console.log(a);

// function bla(x) {
//   console.log(x);
// }

// // let x = bla(3);
// // console.log(x);
// console.log(bla(3));

// function add(a, b) {
//   a + b;
// }

// console.log(add(2, 3));

// console.log(x);

// function twat(z) {
//   var x = z;
//   return x;
// }

// twat(2);

// console.log(x);

// while (true) {
//   var x = 1;
//   break;
// }

// Initialize x in the global scope
// var x = 100;

// function hoist() {
//   // A condition that should not affect the outcome of the code
//   if (false) {
//     var x = 200;
//   }
//   console.log(x);
// }

// hoist();

// // greeting.js
// let greetingMessage = "Good Morning";

// function greetPeople() {
//   console.log(greetingMessage);
// }

// greetPeople();

// // greeting.js
// let greetingMessage = "Good Morning";

// function greetPeople() {
//   console.log(greetingMessage);
// }

// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }

// changeGreetingMessage("Good Evening");
// greetPeople(); // logs 'Good Evening'
// console.log(greetingMessage);

function greetPeople() {
  let greetingMessage = "Good Morning";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError

function test(a, b) {
  console.log(a + b);
  return "bla";
}
('He said, "Hi there!"');
('He said, "Hi there!"');
let f = 'He said, "Hi there!"';
('He said, "Hi there!"');
