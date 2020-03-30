// Search Word (Part 1)

/*
count = 0
if idexOf = -1, return count
else 
  while indexOf > -1
    count += 1
    string = string.slice(indexof)
  return count
*/

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function searchWord(word, text) {
  let re = new RegExp("\\b" + word + "\\b", "gi");
  let matches = text.match(re);
  return matches ? matches.length : 0;
}

// LS solution
// function searchWord(word, text) {
//   let regex = new RegExp("\\b" + word + "\\b", "gi");
//   let matches = text.match(regex);

//   return matches ? matches.length : 0;
// }

console.log(searchWord("sed", text)); // 3
console.log(searchWord("qui", text)); // should return 4, NOT 13

// https://www.freecodecamp.org/forum/t/how-do-i-pass-a-variable-in-regex/339627/4
