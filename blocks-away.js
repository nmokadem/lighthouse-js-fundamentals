const blocksAway = function(directions) {
  let east = 0;
  let north = 0;

  let thisObj = {};
 
  let currentDirection = "";
  let currentSquares = 0;
  let direction = "";

  for (let i = 0; i < directions.length; i += 2){ 
    currentDirection = directions[i];
    currentSquares   = directions[i + 1];
    //console.log(currentDirection,currentSquares);
    if (direction === ''){
      if (currentDirection === 'right') {
        east  += currentSquares;
        direction = "East";
      }
      if (currentDirection === 'left') {
        east  -= currentSquares;
        direction = "West";
      }
      //console.log(east,north,direction);
      continue;
    }


    if (currentDirection === 'right') {
      if (direction === 'South'){
        east -= currentSquares;
        direction = "West";
      } else if (direction === 'North'){  
        east  += currentSquares;
        direction = "East";
      } else if (direction === 'East'){  
        north  -= currentSquares;
        direction = "South";
      } else if (direction === 'West'){  
        north  += currentSquares;
        direction = "North";
      }                  
    }

    if (currentDirection === 'left') {
      if (direction === 'South'){
        east += currentSquares;
        direction = "East";
      } else if (direction === 'North'){  
        east  -= currentSquares;
        direction = "West";
      } else if (direction === 'East'){  
        north  += currentSquares;
        direction = "North";
      } else if (direction === 'West'){  
        north  -= currentSquares;
        direction = "South";
      }                  
    }
    //console.log(east,north,direction);
  }

  if (east >= 0) thisObj['east'] = east; else thisObj['west'] = -east;
  if (north >= 0) thisObj['north'] = north; else thisObj['south'] = -north;

  return thisObj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/*
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/