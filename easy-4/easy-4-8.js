// Letter Counter (Part 1)

/*
Algorithm
- declare empty object
- convert string into array of numbers
  - string.split(" ").map(word => word.length)
for each element of array
  - if element in obj
    - object["element"] += 1
  - else
    - object["element"] = 1
return object
*/

function wordSizes(string) {
  let sizes = {};

  if (string === "") {
    return sizes;
  }

  let wordLengths = string.split(" ").map(element => element.length);
  wordLengths.forEach(element => {
    if (element in sizes) {
      sizes[String(element)] += 1;
    } else {
      sizes[String(element)] = 1;
    }
  });
  console.log(sizes);
}

// LS solution
function wordSizes(words) {
  let wordsArray = words.split(" ");
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes("");
