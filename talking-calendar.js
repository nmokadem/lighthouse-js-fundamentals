const talkingCalendar = function(date) {
  let strDate = "";
  let ordinals = "th";
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  const arrDate = date.split("/");
  const month = months[Number(arrDate[1])-1];
  const day = Number(arrDate[2]);
  const year = arrDate[0];

  if (day % 10 === 1 && day != 11) ordinals = "st";
  if (day % 10 === 2 && day != 12) ordinals = "nd";

  strDate = month + " " + day + ordinals + ", " + year;
  return strDate;
}; 

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
