const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves){
  let thisArray = [];
  let x = 0;
  let y = 0;
  for (let move of moves){
    if (move === 'north') y++;
    if (move === 'south') y--;
    if (move === 'west') x--;
    if (move === 'east') x++;     
  }
  thisArray.push(x);
  thisArray.push(y);
  return thisArray;
}

console.log(finalPosition(moves));

