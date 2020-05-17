// Halvsies
// May 16, 2020

function halvsies(arr) {
  let splitArr = [];

  switch (arr.length) {
    // case 0:
    //   splitArr.push([]);
    //   splitArr.push([]);
    //   break;
    // case 1:
    //   splitArr.push(arr);
    //   splitArr.push([]);
    //   break;
    // case 2:
    //   splitArr.push([arr[0]]);
    //   splitArr.push([arr[1]]);
    //   break;
    default:
      let halfArr = Math.ceil(arr.length / 2);
      splitArr.push(arr.slice(0, halfArr));
      splitArr.push(arr.slice(halfArr));
      break;
  }

  return console.log(splitArr);
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
