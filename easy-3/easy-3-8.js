// Grade book

/*
Problem
rules:
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Examples
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

Data

Algorithm
- Calculcate average of 3 grades
- Use switch statement to return grade
*/

// Code

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  switch (true) {
    case average < 60:
      console.log("F");
      break;
    case average < 70:
      console.log("D");
      break;
    case average < 80:
      console.log("C");
      break;
    case average < 90:
      console.log("B");
      break;
    default:
      console.log("A");
      break;
  }
}

getGrade(95, 90, 93); // "A"
getGrade(50, 50, 95); // "D"

// Switch ranges
// https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
