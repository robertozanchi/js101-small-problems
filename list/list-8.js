// Grocery List

function buyFruit(fruit) {
  let list = [];
  fruit.forEach(item => {
    let count = 0;
    do {
      list.push(item[0]);
      count += 1;
    } while (count < item[1]);
  });

  return list;
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2]
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
