  
//1)
/* let string = 'You cannot end a sentence with because because because is a conjunction';
console.log(string.substr(30,24)); 

let string = 'You cannot end a sentence with because because because is a conjunction';
let newText = string.replace(/\sbecause/g,'') '' -means replace to empty characters
console.log(newText) 
 */

//2)
/* let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(string.match(/love/gi)) */

//3)
/* let string = 'You cannot end a sentence with because because because is a conjunction'
let wordToCount = /because/gi
console.log(string.match(wordToCount)) */

//4)
/* let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let moneyArray = text.match(/\d+/g)
let totalIncome  = (Number(moneyArray[0]) + Number(moneyArray[2]))*12 + Number(moneyArray[1])
console.log(totalIncome)
 */
//5)
/*  const text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const newText = text.replace(/[%@$&#;]/g, '')
console.log(newText) */



//2)DATES
/* 
Create a human readable time format using the Date time object
1)YYYY-MM-DD HH:mm
2)DD-MM-YYYY HH:mm
3)DD/MM/YYYY HH:mm */

 /* const now = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const day = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
console.log(`${day}-${month}-${year} ${hours}:${minutes}`)
console.log(`${day}/${month}/${year} ${hours}:${minutes}`)
 */


//3)Conditionals

/* 1)Write a code which  can give grades to students according to theirs scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

/* Solution 1:
let scoreInput = prompt('Please enter a score')
let score = scoreInput
if (score>=90 && score<=100) {
    console.log('Your grade is A')
} else if (score>=70 && score<=89) {
    console.log('Your grade is B')
} else if (score>=60 && score<=69) {
    console.log('Your grade is C')
} else if (score>=50 && score<=59) {
    console.log('Your grade is D')
} else if (score>=0 && score<=49) {
    console.log('Your grade is F')
} else {
    console.log('You have entered invalid value!!!')
} */

/* Solution 2:
let scoreInput = prompt('Please enter a score')
let score = scoreInput
switch (true) {
    case score>=90 && score<=100:
        console.log('Your grade is A')
        break
    case score>=70 && score<=89:
        console.log('Your grade is B')
        break
    case score>=60 && score<=69:
        console.log('Your grade is C')
        break
    case score>=50 && score<=59:
        console.log('Your grade is D')
        break
    case score>=0 && score<=49:
        console.log('Your grade is F')
        break
    default:
        console.log('You have entered invalid value!!!')   
} */


/* 2)Check if the season is Autumn, Winter, Spring or Summer.
If the user input is:
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer */

/* Solution 1:
let monthInput = prompt('Please enter the month')
let month = monthInput.toLowerCase()
if (month === 'september' || month === 'october' || month === 'november') {
    console.log('The season is Autumn')
} else if (month === 'december' || month === 'january' || month === 'february') {
    console.log('The season is Winter')
} else if (month === 'march' || month === 'april' || month === 'may') {
    console.log('The season is Spring')
} else if (month === 'june' || month === 'july' || month === 'august') {
    console.log('The season is Summer')
} else {
    console.log('Such a month does not exist')
}  */

/* //Solution 2:
let monthInput = prompt('Please enter the month')
let month = monthInput.toLowerCase()
switch (true){
    case month === 'september' || month === 'october' || month === 'november':
        console.log('The season is Autumn')
        break
    case month === 'december' || month === 'january' || month === 'february':
        console.log('The season is Winter')
        break
    case month === 'march' || month === 'april' || month === 'may':
        console.log('The season is Spring')
        break
    case month === 'june' || month === 'july' || month === 'august':
        console.log('The season is Summer')
        break
    default:
        console.log('Such a month does not exist')   
} */

/* //Solution 3:
let monthInput = prompt('Please enter the month')
let month = monthInput.toLowerCase()
switch (month){
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn')
        break
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter')
        break
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring')
        break
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer')
        break
    default:
        console.log('Such a month does not exist')   
} 
 */


/* 3)Check if a day is weekend day or a working day. Your script will take day as an input.
What is the day today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day. */
  /* Solution 1:
  let dayInput = prompt('What is the day today?')
  let day = dayInput.toLowerCase()
  if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
      console.log(`${day[0].toUpperCase() + day.slice(1)} is a working day.`)
  } else if (day === 'saturday' || day === 'sunday') {
    console.log(`${day[0].toUpperCase() + day.slice(1)} is a weekend.`)
  } else {
    console.log(`${day} does not exist.`)
  } */
  
  /* Solution 2:
  let dayInput = prompt('What is the day today?')
  let day = dayInput.toLowerCase()
  day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'
  ? console.log(`${day[0].toUpperCase() + day.slice(1)} is a working day.`)
  : console.log(`${day[0].toUpperCase() + day.slice(1)} is a weekend.`)
   */




  /* 4)Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 days.

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
   */ //ДОДЕЛАТЬ!!!!!!!!!!!!



   //5)ARRAYS

  // 1)First remove all the punctuations and change the string to array and count the number of words in the array
   
   /* //Solution 1:
   let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
   const newText = text.replace(/[.,]/g,'')
   const array = newText.split(' ')
   console.log(array) 
   console.log(array.length) */
   
  /* // Solution 2:(For me it is better)
   let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
   const newTextArray = text.match(/\w+/g)
   console.log(newTextArray)
   console.log(newTextArray.length) */


  //2)In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list and print the array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  let check = countries.includes('Ethiopia')
  let newArray = countries.push('NEW')
  ? console.log('ETHIOPIA'):  console.log(newArray) 



    

    
