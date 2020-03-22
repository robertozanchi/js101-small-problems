// Reversed Arrays

/*
create copy arrayCopy of inputArray
for idx in range 0 to inputArray.length - 1
  inputArray[idx] = arrayCopy[inputArray.length - 1 - idx]
return inputArray
*/

function reverse(list) {
  listCopy = list.slice();
  for (let idx = 0; idx < list.length; idx += 1) {
    list[idx] = listCopy[list.length - 1 - idx];
  }
  return list;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
