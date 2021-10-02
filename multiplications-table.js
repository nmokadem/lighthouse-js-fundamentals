const multiplicationTable = function(maxValue) {
  
  let str = "";
  let thisStr = "";
  for (let i = 1; i <= maxValue; i++){
    for (let j = 1; j <= maxValue; j++){
      thisStr = i * j;
      if (i * j < 10) thisStr = " " + thisStr;
      str += thisStr + " ";
    }
    str += "\n";
  }
  return str;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
