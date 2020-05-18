// After Midnight (Part 2)
// May 18, 2020

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

let afterMidnight = function (time) {
  let [hours, minutes] = time.split(":").map(Number);

  return (hours % 24) * 60 + minutes;
};

let beforeMidnight = function (time) {
  let minutesAfter = afterMidnight(time);
  if (minutesAfter === 0) return 0;

  return MINUTES_PER_DAY - minutesAfter;
};

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
