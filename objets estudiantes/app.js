
const michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
};

const alexandra = {
  name: 'Alexandra',
  points: 4100,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
};

const andrea = {
  name: 'Andrea',
  points: 800,
  isActive: false,
  courses: ['Intro JS', 'JS avanzado']
};

const students = [michelle, alexandra, andrea];

//for (var i =0; i< students.length; i++){
//if(students[i].isActive){
//    console.log(students[i].name);
//  }
//}



//var total = 0;

//for (var i = 0; i< students.length; i++){
//    total += students[i].points;
//}
//console.log(total);

for (var i = 0; i < students.length; i++) {
  var studentsCourses = students[i].courses;
  for (var j = 0; j < studentsCourses.length; j++ ){
    if (studentsCourses[j] === 'JS avanzado'){
      console.log(students[i].name);
    }
  }

}
