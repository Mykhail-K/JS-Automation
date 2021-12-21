//https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/blob/master/02_Day_Data_types/02_day_data_types.md  
//1)
/* let string = 'You cannot end a sentence with because because because is a conjunction';
console.log(string.substr(30,24)); 

let string = 'You cannot end a sentence with because because because is a conjunction';
let newText = string.replace(/\sbecause/g,'')  //'' -means replace to empty characters
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
