const urlEncode = function(text) {
  let encodedStr="";
  text = text.trim();
  for (letter of text){
    if (letter === " ")
      encodedStr += "%20";
    else
      encodedStr += letter;
  }
  return encodedStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
