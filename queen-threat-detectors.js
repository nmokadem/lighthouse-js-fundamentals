function generateBoard(whiteQueen, blackQueen){
  let x = new Array(8);

  for (var i = 0; i < x.length; i++) {
    x[i] = new Array(8).fill(0,0,8);
  }
  x[whiteQueen[0]][whiteQueen[1]] = 1;
  x[blackQueen[0]][blackQueen[1]] = 1;
  return x;
}

function queenThreat(generatedBoard){
  let thisRow = whiteQueen[0];
  let thisCol = whiteQueen[1];

  //if the two queens are on the same row or the same column the return ture
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) return true;

  for (let i = 0; i < 8; i++) {
    let j = (thisCol -  thisRow) + i;  // for left to right diagonal
    let j1 = (thisRow - i) + thisCol;  // for right to left diagonal
    
    if (j >= 0 && j < 8){
      if ( thisRow === i && thisCol === j) continue;
      if (generatedBoard[i][j] === 1) return true;     
    }
    if (j1 >= 0 && j1 < 8){
      if ( thisRow === i && thisCol === j1) continue;
      if (generatedBoard[i][j1] === 1) return true;     
    }
  }
  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [5, 3];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [3, 3];
blackQueen = [6, 3];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
