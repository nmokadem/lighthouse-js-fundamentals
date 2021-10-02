const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

function judgeVegetable(vegetables,metric){
  let highestScore = 0;
  let submitter = "";

  for (let vegetable of vegetables){
    if (vegetable[metric] > highestScore){
      submitter = vegetable.submitter;
      highestScore = vegetable[metric];
    }
  }
  return submitter;
}

console.log(judgeVegetable(vegetables, metric));
