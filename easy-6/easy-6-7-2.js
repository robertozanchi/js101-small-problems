// Name Swapping
// May 2020, 2020

let swapName = function (text) {
  let namesArray = text.split(" ");
  return `${namesArray[1]}, ${namesArray[0]}`;
};

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
