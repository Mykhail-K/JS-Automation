/*  const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  }
]  */

//1.Iterate through the users array and get all the keys of the object using destructuring

/* for (const {name, scores, skills, age} of users){
  console.log({name, scores, skills, age})
} */

//2.Find the persons who have less than two skills
//Solution 1:
    /* for (const person of users ){
    if (person.skills.length < 2) {
      console.log(person.name);
    }
  }  */
//Solution 2:
  /* for (const {name, scores, skills, age} of users ){
    if (skills.length < 2) {
      console.log(name);
    }
  }
 */
//3.Destructure the countries object print name, capital, population and languages of all countries
 /* for (const {name, capital, languages, population} of countries){
   console.log({name, capital, languages, population});
 } */

 //4.Write a function called convertArrayToObject which can convert the array to a structure object.
/* const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

function convertArrayToObject (arr){
 let newArray = []
 for (const student of students){
     newArray.push({name:student[0], skills:student[1], scores:student[2]})
   }
   return newArray;
}
console.log(convertArrayToObject(students));
 */

//5.Copy the student object to newStudent without mutating the original object. In the new object add the following:
//- Add Bootstrap with level 8 to the front end skill sets
//- Add Express with level 9 to the back end skill sets
//- Add SQL with level 8 to the data base skill sets
//- Add SQL without level to the data science skill sets
/* const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
const coppiedObject = {...student}
coppiedObject.skills.frontEnd.push({skill: 'BootStrap', level: 8}) 
coppiedObject.skills.backEnd.push({skill: 'Express', level: 9})
coppiedObject.skills.dataBase.push({skill: 'SQL', level: 8})
coppiedObject.skills.dataScience.push('SQL')
console.log(coppiedObject)
  */


