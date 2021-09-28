var howManyHundreds = function (num) {
  let hundreds = num - num % 100;
  return hundreds / 100;
};

console.log(howManyHundreds(895));