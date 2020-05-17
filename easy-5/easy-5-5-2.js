// Combine Two Lists
// May 16, 2020

// Solution using for loop
function interleave(arr1, arr2) {
  let combinedArr = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    combinedArr.push(arr1[idx], arr2[idx]);
  }

  return console.log(combinedArr);
}

// Solution using forEach method

function interleave(arr1, arr2) {
  let combinedArr = [];

  arr1.forEach((element, idx) => {
    combinedArr.push(element, arr2[idx]);
  });

  return console.log(combinedArr);
}

// Solution using map method

interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]
