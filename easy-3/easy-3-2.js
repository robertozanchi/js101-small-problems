// Bannerizer

//logInBox("To boldly go where no one has gone before.");

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let string = "To boldly go where no one has gone before.";
function logInBox(string) {
  console.log("+-" + "-".repeat(string.length) + "-+");
  console.log("| " + " ".repeat(string.length) + " |");
  console.log("| " + string + " |");
  console.log("| " + " ".repeat(string.length) + " |");
  console.log("+-" + "-".repeat(string.length) + "-+");
}

// function logInBox(message) {
//   let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
//   let emptyLine = `|${" ".repeat(message.length + 2)}|`;

//   console.log(horizontalRule);
//   console.log(emptyLine);
//   console.log(`| ${message} |`);
//   console.log(emptyLine);
//   console.log(horizontalRule);
// }

logInBox("To boldly go where no one has gone before.");
logInBox("");
