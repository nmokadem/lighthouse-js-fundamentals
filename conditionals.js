const raining = true;
//const cold = false;
const temperature = 12;
const isCitizen = true;
const age = 26;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

//if (cold) {
//  console.log("Make sure you pick out a scarf!");
//} else {
//   console.log("Short sleeves are find.");
//}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't ut it!");
} else {
  console.log("Short sleeves are find.");
}

console.log("Now you're ready to go ouside!");

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going ourside isn't such a great idea...");
}

