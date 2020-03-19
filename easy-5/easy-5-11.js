// After Midnight (Part 1)

/*
- Convert input minutes in minutes in a 24-hour window
  - Remainder of input divided by total minutes in a day, 1440
- With minutes in <= 24 hour period, calculate hours
  - Divide minutes by 60, take floor of result)
- With minutes in <= 24 hour period, calculate minutes
  - Take result of minutes % 60
- Return hours and minutes as string HH:MM
*/

function padZero(number) {
  if (number.toString().length == 1) {
    return "0" + number;
  } else {
    return number;
  }
}

function timeOfDay(minutes) {
  let singleDay = minutes % 1440;
  let hours = Math.floor(singleDay / 60);
  if (hours < 0) {
    hours = 24 + hours;
  }
  let mins = singleDay % 60;
  if (mins < 0) {
    mins = 60 + mins;
  }
  return `${padZero(hours)}:${padZero(mins)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
