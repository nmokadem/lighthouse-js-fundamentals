function concat(arr1,arr2){
  let thisArr = [];
  
  if (arr1.length === 0 || arr2.length === 0){
    if (arr1.length === 0 && arr2.length === 0) return thisArr;
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
  }

  // if (arr1.length === arr2.length){
  //   for (let i = 0; i < arr1.length; i++){
  //     arr1.push(arr2[i]);
  //   }
  //   return arr1;
  // }

  if (arr1.length < arr2.length){
    for (let i = 0; i < arr1.length; i++){
      arr2.splice(i,0,arr1[i]);
    }
    return arr2;  
  } else {
    for (let i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }  
    return arr1;
  }  
}

console.log("[5,2,3],[4,9,1]",concat([5,2,3],[4,9,1]));
console.log("[5,2],[3,4,9,1]",concat([5,2],[3,4,9,1]));
console.log("[5,2,3,4],[9,1]",concat([5,2,3,4],[9,1]));
