// Lettercase Percentage Ratio

/*
- Count lowercase letters, uppercase letters and other chars
  - declare uppercaseCount, lowercaseCount, otherCount as totals
  - Split string into array of chars
  - Loops through array and add to each total
    - Use regex to identify char
- Calculate percentage of each
  - Convert to float with 2 decimal points
- Return object with 3 properties and percentages
*/

function letterPercentages(letters) {
  let chars = letters.split("");
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let otherCount = 0;
  chars.forEach((char) => {
    if (char.match(/[A-Z]/)) {
      uppercaseCount += 1;
    } else if (char.match(/[a-z]/)) {
      lowercaseCount += 1;
    } else {
      otherCount += 1;
    }
  });

  let obj = {};
  obj["lowercase"] = ((lowercaseCount / letters.length) * 100).toFixed(2);
  obj["uppercase"] = ((uppercaseCount / letters.length) * 100).toFixed(2);
  obj["neither"] = ((otherCount / letters.length) * 100).toFixed(2);

  return obj;
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
