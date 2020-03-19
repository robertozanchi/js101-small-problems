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

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function padZero(number) {
  if (number.toString().length == 1) {
    return "0" + number;
  } else {
    return number;
  }
}

function timeOfDay(minutes) {
  let singleDay = minutes % MINUTES_PER_DAY;
  let hours = Math.floor(singleDay / MINUTES_PER_HOUR);
  if (hours < 0) {
    hours = HOURS_PER_DAY + hours;
  }
  let mins = singleDay % MINUTES_PER_HOUR;
  if (mins < 0) {
    mins = MINUTES_PER_HOUR + mins;
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
