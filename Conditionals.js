//3)Conditionals

/* 1)Write a code which can give grades to students according to theirs scores:
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

 //Solution 3:
/* let monthInput = prompt('Please enter the month')
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
  
  // Solution 1:
  /* let dayInput = prompt('What is the day today?')
  let day = dayInput.toLowerCase()
  if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
      console.log(`${day[0].toUpperCase() + day.slice(1)} is a working day.`)
  } else if (day === 'saturday' || day === 'sunday') {
    console.log(`${day[0].toUpperCase() + day.slice(1)} is a weekend.`)
  } else {
    console.log(`${day} does not exist.`)
  }  */
  
 //Solution 2:
  /* let dayInput = prompt('What is the day today?')
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