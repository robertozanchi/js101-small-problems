// Letter Counter (Part 2)

function wordSizes(string) {
  let sizes = {};

  if (string === "") {
    return sizes;
  }

  let wordLengths = string.split(" ").map(element => cleanUp(element).length); // called cleanUp() here
  wordLengths.forEach(element => {
    if (element in sizes) {
      sizes[String(element)] += 1;
    } else {
      sizes[String(element)] = 1;
    }
  });
  console.log(sizes);
}

function cleanUp(text) {
  let cleanText = "";

  for (let idx = 0; idx < text.length; idx += 1) {
    if (
      (text[idx] >= "a" && text[idx] <= "z") ||
      (text[idx] >= "A" && text[idx] <= "Z")
    ) {
      cleanText += text[idx];
    }
  }

  return cleanText;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes("");
