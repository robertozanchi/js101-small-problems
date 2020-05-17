// How Many?
// May 17, 2020

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

let countOccurrences = function (array) {
  let occurences = {};

  array.forEach((element) => {
    element = element.toLowerCase();
    occurences[element] = occurences[element] || 0;
    occurences[element] += 1;
  });

  Object.entries(occurences).forEach((entry) => {
    console.log(`${entry[0]} => ${entry[1]}`);
  });
};

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
