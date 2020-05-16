function dms(angle) {
  let degrees = parseInt(angle, 10);
  let minutes = parseInt((angle - degrees) * 60, 10);
  let seconds = parseInt(((angle - degrees) * 60 - minutes) * 60, 10);
  return console.log(`${degrees}˚${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}
