const sumLargestNumbers = function(data) {
  // Put your solution here
  let largestNumber = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;
  
  for (let i = 0; i < data.length; i++){
    if (largestNumber < data[i]){
      secondLargest = largestNumber;
      largestNumber = data[i];
    } else if (secondLargest < data[i]) secondLargest = data[i];
  }
  return largestNumber + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 3,2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
