const camelCase = function(input) {
  let arr = input.split(" ");
  let str = arr[0];
  for (let i = 1; i < arr.length; i++){
    str += arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
