const calculateChange = function(total, cash) {
  let thisObj = {};
  let change = cash - total;
  if (change === 0) return "No Change";
  if (change < 0) return "Not enough";

  if (change > 2000){
    let twenties = parseInt(change  / 2000, 10);
    change -= twenties * 2000;
    thisObj["twentyDollar"] = twinties;
  }

  if (change > 1000){
    let tens = parseInt(change  / 1000, 10);
    change -= tens * 1000;
    thisObj["tenDollar"] = tens;
  }

  if (change > 500){
    let fives = parseInt(change  / 500,10);
    change -= fives * 500;
    thisObj["fiveDollar"] = fives;
  }

  if (change > 200){
    let twos = parseInt(change  / 200, 10);
    change -= twos * 200;
    thisObj["twoDollar"] = twos;
  }

  if (change > 100){
    let ones = parseInt(change  / 100, 10);
    change -= ones * 100;
    thisObj["oneDollar"] = ones;
  }

  if (change > 25){
    let quarters = parseInt(change  / 25, 10);
    change -= quarters * 25;
    thisObj["quarter"] = quarters;
  }

  if (change > 10){
    let dimes = parseInt(change  / 10, 10);
    change -= dimes * 10;
    thisObj["dime"] = dimes;
  }

  if (change > 5){
    let nickles = parseInt(change  / 5, 10);
    change -= nickles * 5;
    thisObj["nickle"] = nickels;
  }

  if (change > 0) thisObj["penny"] = change;

  return thisObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//{ twoDollar: 1, dime: 1, penny: 3 }
//{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
//{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
/*

    Twenty dollars
    Ten dollars
    Five dollars
    Two dollars
    One dollar
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢)

*/