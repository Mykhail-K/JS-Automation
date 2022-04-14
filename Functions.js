//1.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
/* function showDateTime(){
  const now = new Date();
  const day = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}
showDateTime() */

//2.Declare a function name swapValues. This function swaps value of x to y (without using extra variables)
//swapValues(3, 4); // x => 4, y => 3
//swapValues(4, 5); // x = 5, y = 4

/* function swapValues(x,y){
  console.log(y,x);
}
swapValues(3,4);
swapValues(4,5); */


//3.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method)
/* function reverseArray(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr[i] = arr[arr.length-1-i]
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C'])); */


//4.Write a function which takes any number of arguments and return the sum of the arguments
/* function sumAllArg(){
let sum = 0;
  for( let i = 0; i < arguments.length; i++){
  sum += arguments[i];
}
  return sum
}
console.log(sumAllArg(1, 2, 3)); 


const sumAllArg2 = (...args) => {
  let sum = 0;
  for( const element of args){
  sum += element;
}
return sum;
}
console.log(sumAllArg2(1, 2, 3, 4));


const sumAllArg3 = (...args) => {
  let sum = 0;
  for( let i = 0; i < args.length; i++){
  sum += args[i];
}
return sum;
}
console.log(sumAllArg3(1, 2, 3, 4, 5)); */


//5.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
/* function shuffleArray(arr){
arr.sort(() => Math.random() -0.5); ????????
return arr
}
console.log(shuffleArray([1, 2, 3])); */


//6.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
/* function factorial(n){
  return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(4)); */


//7.Write a functions which checks if all items are unique in the array
/* function checkForUnique(array) {
  let checkedValues = []

  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    if (checkedValues.indexOf(value) !== -1) {
      return false
    }
    checkedValues.push(value);
  }
  return true
}
console.log(checkForUnique([1, 2, 3, 4])); */


//8.Write a function which checks if all the items of the array are the same data type
/* function checkTheSameData (arr) {
  return new Set( arr.map(x => typeof x)).size <= 1; //arr.map( x => typeof x ) returns array with data type of each element in array
}
console.log(checkTheSameData([1, 1, 3, 4]))
 */

