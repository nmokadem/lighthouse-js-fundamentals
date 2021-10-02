let range = function(start, end, step){
  var thisArr = [];

  if (start > end) return thisArr;
  if (step <= 0) return thisArr;
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') return thisArr;

  for (let i = start; i <= end; i += step){
    thisArr.push(i);
  }

  return thisArr;
};

console.log(range(0,8,2));
console.log(range(-9,3,3));


