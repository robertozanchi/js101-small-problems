// 1 Cute Angles
// May 15, 2020

function dms(angle) {
  while (angle < 0) {
    angle += 360;
  }

  angle = angle % 360;

  let degrees = parseInt(angle, 10);
  let minutes = parseInt((angle - degrees) * 60, 10);
  let seconds = parseInt(((angle - degrees) * 60 - minutes) * 60, 10);

  return console.log(`${degrees}˚${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
console.log();
dms(-1); // 359°00'00"
dms(400); // 40°00'00"
dms(-40); // 320°00'00"
dms(-420); // 300°00'00"
