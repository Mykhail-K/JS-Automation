/* const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];
 */

//1.Find a union b
/* let new = [...a, ...b];
console.log(new) */
/* let union = new Set([...a, ...b])
console.log(union) */

//2.Find a intersection b
/* let A = new Set(a);
let B = new Set(b);
let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C); */

//3.Find a with b
/* let A1 = new Set(a);
let B1 = new Set(b);
let c1 = a.filter((num) => !B1.has(num));
let C1 = new Set(c1);
console.log(C1); */

//4.How many languages are there in the countries object file.
/* let arrayOfLanguages = []
  countries.forEach((country) => {
  arrayOfLanguages = arrayOfLanguages.concat(country.languages)
})
let count = new Set(arrayOfLanguages)
console.log(count.size) */
