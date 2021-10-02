function merge(arr1,arr2){
  let thisArr = [];
  
  if (arr1.length === 0 || arr2.length === 0){
    if (arr1.length === 0 && arr2.length === 0) return thisArr;
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
  }

  if (arr1.length < arr2.length){
    for (let i = 0; i < arr1.length; i++){
      arr2.splice(i,0,arr1[i]);
    }
    thisArr = arr2;  
  } else {
    for (let i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }  
    thisArr = arr1;
  }  
  return thisArr.sort();  
}

console.log("[],[]",merge([],[]));
console.log("[1,2,3],[]",merge([1,2,3],[]));
console.log("[],[4,5,6]",merge([],[4,5,6]));
console.log("[2,3,5],[1,4,9]",merge([2,3,5],[1,4,9]));
console.log("[2,5],[1,3,4,9]",merge([2,5],[1,3,4,9]));
console.log("[2,3,4,5],[1,9]",merge([2,3,4,5],[1,9]));
