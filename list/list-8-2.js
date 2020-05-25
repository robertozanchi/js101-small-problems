// Grocery List
// May 25, 2020

let buyFruit = function (fruits) {
  let list = [];

  fruits.forEach((fruit) => {
    list = list.concat(Array(fruit[1]).fill(fruit[0]));
  });

  return console.log(list);
};

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
