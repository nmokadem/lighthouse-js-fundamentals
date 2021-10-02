function loopyLighthouse(range, multiples, words){
  var str = "";
  for (let i = range[0]; i < range[1] ; i++){
    let str = "";
    for (let j = 0; j <= multiples.length; j++){
      if (i % multiples[j] === 0) str += words[j];
    }
    if (str === "") str = i;
    console.log(str)
  }
}

loopyLighthouse([5,50],[2,3],['two','three']);

