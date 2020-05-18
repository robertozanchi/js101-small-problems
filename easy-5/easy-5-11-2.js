// After Midnight (Part 1)
// May 18, 2020

const HOURS_IN_DAY = 24;
const MINS_IN_HOUR = 60;
const MINS_PER_DAY = HOURS_IN_DAY * MINS_IN_HOUR;

let timeOfDay = function (minutes) {
  if (minutes < 0) {
    minutes = (minutes % MINS_PER_DAY) + MINS_PER_DAY;
  } else {
    minutes = minutes % MINS_PER_DAY;
  }

  let hours = Math.floor(minutes / MINS_IN_HOUR);
  let mins = minutes % MINS_IN_HOUR;

  return `${leadingZero(hours)}:${leadingZero(mins)}`;
};

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
