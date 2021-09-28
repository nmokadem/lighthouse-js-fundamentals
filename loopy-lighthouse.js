var str = "";
for (let i = 100; i <= 200 ; i++){
  str = "";
  if (i % 3 === 0) str = "Loopy";
  if (i % 4 === 0) str += "Lighthouse";
  if (str === "") str = i;
  console.log(str);
}
