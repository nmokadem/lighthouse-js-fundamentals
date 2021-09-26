const raining = true;
//const cold = false;
const temperature = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
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

