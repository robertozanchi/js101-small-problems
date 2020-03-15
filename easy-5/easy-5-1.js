// Cute Angles

/*
Problem
input:
-  a floating point number
output:
- a string
rules:
- write a function
- input represents angle between 0 and 360 degrees 
- use a degree symbol (˚) to represent degrees
- use a single quote (') to represent minutes 
- use a double quote (") to represent seconds
- There are 60 minutes in a degree, and 60 seconds in a minute
- 0 or 360 return 0°00'00"; 360 can also return 360°00'00"
- Input validation? Negative numbers?

Examples
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Data Structures
- No arrays or other objects required

Algorithm
if input === 0 || 360, return 0°00'00"
else
- degrees = Math.floor(input)
- minutes = Math.floor(input % 1 * 60)
- seconds = Math.floor((input % 1 * 60) % 1 * 60)
return string degrees°minutes'seconds"
*/

function splitDegrees(value) {
  return (value % 1) * 60;
}

function padZero(number) {
  if (number.toString().length == 1) {
    return "0" + number;
  } else {
    return number;
  }
}

function angleInRange(angle) {
  if (angle >= 360) {
    return angle % 360;
  } else if (angle < 0) {
    while (angle < 0) {
      angle += 360;
    }
    return angle;
  } else {
    return angle;
  }
}

function dms(value) {
  value = angleInRange(value);

  if (value === 0) {
    return "0\xB000'00\"";
  } else {
    let degrees = Math.floor(value);
    let minutes = Math.floor(splitDegrees(value));
    let seconds = Math.floor(splitDegrees(splitDegrees(value)));
    return `${degrees}\xB0${padZero(minutes)}'${padZero(seconds)}"`;
  }
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 0°00'00"
console.log(dms(390)); // 30°00'00"
console.log(dms(-420)); // 300°00'00"

// // Examples
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
