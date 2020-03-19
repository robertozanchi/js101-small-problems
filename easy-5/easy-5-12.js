// After Midnight (Part 2)

/* 
Algorithm

afterMidnight
- split HH:MM time string into HH and MM
- convert HH and MM into integers
- declare totalMinutes as HH * 60 + MM
- return totalMinutes

beforeMidnight
- return 24 * 60 - afterMidnight

*/

function afterMidnight(time) {
  let times = time.split(":");
  times = times.map(time => Number.parseInt(time, 10));
  if (times[0] === 24) {
    times[0] = 0;
  }
  return times[0] * 60 + times[1];
}

function beforeMidnight(time) {
  let after = afterMidnight(time);
  if (after === 0) {
    return after;
  } else {
    return 60 * 24 - after;
  }
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
