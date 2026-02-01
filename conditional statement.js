// if
let age = 18;

if (age >= 18) {
  console.log("You can vote");
}
// else if 
let marks = 85;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}
//  nested if 
let ages = 20;
let hasID = true;

if (ages >= 18) {
  if (hasID) {
    console.log("You can enter");
  } else {
    console.log("Show your ID");
  }
} else {
  console.log("Too young to enter");
}
//  switch

let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
