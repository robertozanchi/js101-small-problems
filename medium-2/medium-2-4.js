// Unlucky Days
// June 5, 2020

// Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year.

// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])

// var denseKeys = [...arr.keys()];
// console.log(denseKeys);  // [0, 1, 2]

let fridayThe13ths = function (year) {
  let monthIndexes = [...Array(12).keys()];

  let monthlyThirteens = monthIndexes.map((month) => {
    return new Date(year, month, 13).getDay();
  });

  return monthlyThirteens.filter((day) => day === 5).length;
};

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
