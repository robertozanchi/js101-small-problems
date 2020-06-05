// Lettercase Percentage Ratio
// June 3, 2020

let makePercent = function (num, total) {
  return ((num / total) * 100).toFixed(2);
};

let letterPercentages = function (text) {
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  let total = text.length;
  text.split("").forEach((char) => {
    if (char >= "a" && char <= "z") {
      lowercase += 1;
    } else if (char >= "A" && char <= "Z") {
      uppercase += 1;
    } else {
      neither += 1;
    }
  });

  return `lowercase: ${makePercent(lowercase, total)}, uppercase: ${makePercent(
    uppercase,
    total
  )}, neither: ${makePercent(neither, total)}`;
};

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
