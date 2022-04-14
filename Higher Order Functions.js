  /* const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
    ];
     */

    //1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
    /* let totalTogether = products.map((product) => product.price).filter(Number).reduce((previous, current) =>
    previous + current, 0);
    console.log(totalTogether);
 

    //2.Find the sum of price of products using only reduce reduce(callback))
    /* let sumProductsPrice = products.reduce((previous, current) => previous + Number(current.price), 0);
    console.log(sumProductsPrice); */


    //3.Declare a getFirstTenCountries function and return an array of ten countries.
     //Use different functional programming to work on the countries.js array
   /*   const countries = [
      {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
      },
      {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
      },
      {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
      },
      {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
      },
      {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
      },
      {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://restcountries.eu/data/and.svg',
        currency: 'Euro'
      },
      {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: 25868000,
        flag: 'https://restcountries.eu/data/ago.svg',
        currency: 'Angolan kwanza'
      },
      {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://restcountries.eu/data/aia.svg',
        currency: 'East Caribbean dollar'
      },
      {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://restcountries.eu/data/ata.svg',
        currency: 'Australian dollar'
      },
      {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://restcountries.eu/data/atg.svg',
        currency: 'East Caribbean dollar'
      },
      {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400,
        flag: 'https://restcountries.eu/data/arg.svg',
        currency: 'Argentine peso'
      },
      {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://restcountries.eu/data/arm.svg',
        currency: 'Armenian dram'
      },
      {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://restcountries.eu/data/abw.svg',
        currency: 'Aruban florin'
      }
    ] */
    
   /*  let getFirstTenCountries = countries.filter((country, index) => index < 10);
    console.log(getFirstTenCountries);
     
    
    let getFirstTenCountries = countries.map((element, index) => index < 10);
    console.log(getFirstTenCountries); */



//4. Declare a getLastTenCountries function which returns the last ten countries in the countries array
/* let getLastTenCountries = countries.reverse().filter((element, index) => index < 10);
   console.log(getLastTenCountries);
 */



//5.Use the countries information, in the data folder. Sort countries by name, by capital, by population
/* let sortByName = countries.sort((a, b) =>{
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
})
console.log(sortByName);

let sortByCapital = countries.sort((a, b) =>{
  if (a.capital < b.capital) return -1;
  if (a.capital > b.capital) return 1;
  return 0;
})
console.log(sortByCapital);

let sortByPopulation = countries.sort(function (a, b) {
  return a.population - b.population
})
console.log(sortByPopulation); */



//6*** Find the 10 most spoken languages:
/* function mostSpokenLanguages(countries, n){
  let arrayOfLanguages = []
  countries.forEach((country) => {
  arrayOfLanguages = arrayOfLanguages.concat(country.languages)
})
let langSet = new Set(arrayOfLanguages);
let counts = []
for (const l of langSet) {
  let filteredLang = arrayOfLanguages.filter((lng) => lng === l);
  counts.push({ country: l, count: filteredLang.length })
  }
  return counts.sort((a, b) => b.count - a.count).filter((element, index) => index < n);
}
console.log(mostSpokenLanguages(countries, 5)); */



//7*** Use countries_data.js file create a function which create the ten most populated countries
 /* function mostPopulatedCountries (countries, n) {
    let sortedArray = countries.sort((a, b)  => b.population - a.population).filter((element, index) => index < n)
    let newArray = []
    for (let i = 0; i < sortedArray.length; i++){
    newArray.push({country: sortedArray[i].name, population: sortedArray[i].population})  
   }
    return newArray
 }
 console.log(mostPopulatedCountries(countries, 10)) */
