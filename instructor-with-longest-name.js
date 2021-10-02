const instructorWithLongestName = function(instructors) {
  let thisInstructor ={
    name : "",
    course : ""
  }

  for (let instructor of instructors){
    if (instructor.name.length > thisInstructor.name.length){
      thisInstructor.name = instructor.name;
      thisInstructor.course = instructor.course;
    }
  }
  return thisInstructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
