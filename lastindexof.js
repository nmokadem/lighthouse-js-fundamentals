let lastIndexOf = function (thisArr, val){
  let lngth = thisArr.length;
  let idx = -1;
  for (let i = 0; i < lngth; i++){
    if (thisArr[i] === val) idx = i;
  }
  return idx;
}

