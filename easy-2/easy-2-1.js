// 1. Welcome Stranger

/*
Problem
Inputs:
- an array of strings
- an object with strings as values
- any input validation?

Output:
- a string

Rules:
- array will have 2+ elements
- array's elements will concatenate to person's full name
- object will have 2 keys & values

Example
["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" } =>
logs Hello, John Q Doe! Nice to have a Master Plumber around.

Data structures
- Strings, as we log to console, and array elements and object values
are strings, as well.

Algorithm
- Join array elements to a string with person's name
- Log string with template literals for object's values

*/
//CODE

function greetings(string, object) {
  let fullName = string.join(" ");
  let title = object["title"];
  let occupation = object["occupation"];
  console.log(
    `Hello ${fullName}! Nice to have a ${title} ${occupation} around.`
  );
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
