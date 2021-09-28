let calculateRectangleArea = function (length, width) {
  if (length <=0 || width <= 0) return "undefined";
  return length * width;
};

let calculateTriangleArea = function (base, height) {
  if (base <=0 || height <= 0) return "undefined";
  return base * height / 2;
};

let calculateCircleArea = function (radius) {
  if (radius <=0) return "undefined";
  let pi = 3.1415;
  return pi * Math.pow(radius, 2);
};

console.log(calculateRectangleArea( 5, 10));
console.log(calculateTriangleArea(5, 10));
console.log(calculateCircleArea(5));
