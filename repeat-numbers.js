const repeatNumbers = function(data) {
  let str = "";
  for (arr of data){
    for (let i = 0; i < arr[1]; i++){
      str += arr[0];
    }
    str += " ";
  }
  return str;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
