const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i=0;
let ln = ingredients.length;

// Write a while loop that prints out the contents of ingredients:
while (i < ln){
  console.log(ingredients[i]);
  i++;
} 
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ln; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ln - 1; i >= 0; i--){
  console.log(ingredients[i]);
}
