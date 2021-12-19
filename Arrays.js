//4)ARRAYS
//https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/blob/master/05_Day_Arrays/05_day_arrays.md

// 1)First remove all the punctuations and change the string to array and count the number of words in the array
   //Solution 1:
   /*let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
   const newText = text.replace(/[.,]/g,'')
   const array = newText.split(' ')
   console.log(array) 
   console.log(array.length) */
   
  //Solution 2:(For me this solution is better)
  /* let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
   const newTextArray = text.match(/\w+/g)
   console.log(newTextArray)
   console.log(newTextArray.length) */


//2)In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list and print the array.
/* const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopiaaaa',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  let checkItem = 'Ethiopia'
    countries.includes(checkItem) ? console.log('ETHIOPIA') : countries.push(checkItem)
    console.log(countries) */


//3)In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
  /* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
 ]
  let checkItem = 'Sass'
    webTechs.includes(checkItem) ? console.log('Sass is a CSS preprocess') : webTechs.push(checkItem)
    console.log(webTechs) */
  
//4)Concatenate the following two variables and store it in a fullStack variable.
/* const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack) */

//5.The following is an array of 10 students ages:
 /* const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 //1.Sort the array and find the min and max age
 let sortArray = ages.sort()
 console.log(sortArray)
 let minAge = sortArray[0]
 let maxAge = sortArray[sortArray.length - 1]
 console.log('Min age:', minAge)
 console.log('Max age:', maxAge)
 //2.Find the median age(one middle item or two middle items divided by two)
 if (sortArray.length%2 === 0) {
    let medianAge = sortArray.length/2
    console.log(sortArray[medianAge])
} else {
   let medianAge1 = sortArray.length/2
   let medianAge1Round = Math.floor(medianAge1)
   console.log(medianAge1Round)
   let medianAge2 = medianAge1Round + 1
   let medianAge3 = (sortArray[medianAge1Round] + sortArray[medianAge2])/2
   console.log(medianAge3) 
}
//3.Find the average age(all items divided by number of items)
 let a = ages.length
 let sum = 0
 for (let i = 0; i < ages.length; i++){
     sum +=ages[i]
 }
 let averageAge = sum / a
 console.log('Average age:', averageAge)
 //4.Find the range of the ages(max minus min)
 console.log(`The range of the ages: ${maxAge}-${minAge}`)
 //5.Compare the value of (min - average) and (max - average), use Math.abs() method
 let value1 = minAge - averageAge
 let value2 = maxAge - averageAge
 let compare = Math.abs(value1) > Math.abs(value2)
  ? console.log(`${Math.abs(value1).toFixed(2)} больше чем ${Math.abs(value2).toFixed(2)}`) : console.log(`${value1}.toFixed(2) меньше чем ${value2}.toFixed(2)`)

 */