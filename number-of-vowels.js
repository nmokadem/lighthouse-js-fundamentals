const numberOfVowels = function(data) {
  let cnt = 0;
  for (letter of data){
    if ("aeiou".includes(letter)) cnt++;
  }
  return cnt;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
