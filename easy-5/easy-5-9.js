/*
- turn array into object where value is count of key occurences
  - declare empty object obj = {}
  - for each element of array
    - if element is not in keys(obj)
      - obj[element] = 1
    - else
      - obj[element] += 1
- For each key in list of object keys
  - console.log key => value
*/

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
  "truck"
];

function countOccurrences(collection) {
  let obj = {};

  collection.forEach(element => {
    if (Object.keys(obj).includes(element)) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  });

  Object.keys(obj).forEach(element => {
    console.log(`${element} => ${obj[element]}`);
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4;
// truck => 3;
// SUV => 1;
// motorcycle => 2;
