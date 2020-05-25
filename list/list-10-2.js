// Inventory Item Availability
// May 25, 2020

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

let transactionsFor = function (id, list) {
  return list.filter((transaction) => {
    return transaction.id === id;
  });
};

let isItemAvailable = function (id, list) {
  let balance = 0;

  transactionsFor(id, list).forEach((item) => {
    if (item.movement === "in") {
      balance += item.quantity;
    } else {
      balance -= item.quantity;
    }
  });

  return balance > 0;
};

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
