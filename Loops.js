/* 1. Using the countries array, create an array for countries length'
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

/* const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const newArr = []
for (const country of countries) {
  newArr.push(country.length)   
}
console.log(newArr) */


/* 2. Using the countries array, find the country containing only 5 characters
/* const countries = [
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
    'Kenya'
  ]
const newArr = []
for (const country of countries) {
    if (country.length == 5){
        newArr.push(country)  
    }
  }
  console.log(newArr) */


  /* 3.Find the longest word in the webTechs array
/* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let myLength = webTechs[0].length
  let myWord = webTechs[0]
  for(let i = 0; i < webTechs.length; i++){
    if (webTechs[i].length > myLength)
    { 
    myLength = webTechs[i].length;
        myWord = webTechs[i];
    }
}    
console.log(myWord) */


/* 4. Use the webTechs array to create the following array of arrays
/* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const newArr = []
for (i = 0; i < webTechs.length; i++) {
  webTechs[i] = new Array(`${webTechs[i]}`, webTechs[i].length)
  newArr.push(webTechs[i])
}
console.log(newArr)
newArr[2][0] = 'Java'
newArr[2][1] = newArr[2][0].length
console.log(newArr[2])
newArr[3] = ['Protractor', 'Protractor'.length]
console.log(newArr) */


//5.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method
/*  const fruits = ['banana', 'orange', 'mango', 'lemon']
const newArr = []
for (i = fruits.length-1; i >= 0 ; i--) {
    newArr.push(fruits[i])
}   
console.log(newArr) */

//Задача от Ани:переставить первый и последний элемент без создания нового массива(индексы)
/* let a = newArr[0]
newArr[0] = newArr[newArr.length-1]
newArr[newArr.length-1] = a
console.log(newArr) */


//6.Copy countries array (avoid mutation)
  /* const countries = [
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
    'Kenya'
  ]
 newArr = []
 for(i = 0; i < countries.length; i++) {
  newArr[i] = countries[i]
 }
console.log(newArr) */

//!!!!!!Задача от Ани: сделать реверc массива без пуша
/* let newCountries = [];
for (let i = 0; i < countries.length; i++){
  newCountries[i] = countries[countries.length-1-i]
  }
 console.log(newCountries); */


//7.Sort the webTechs array
 /* const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] 
  for (let i = 0; i < webTechs.length; i++){
  for (let j = 0; j < i; j++){
      if (webTechs[i].length < webTechs[j].length) {
        let x = webTechs[i];
        webTechs[i] = webTechs[j];
        webTechs[j] = x;
      }
    }
  }
console.log(webTechs);
 */


//8. *** For the following tasks use countries array from 06_Day_Loops/06_day_starter/data/countries.js file
/* const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]
//1.Find the country containing the hightest number of characters in the countries array
let length = countries[0].length;
let country = countries[0];
for(let i = 0; i < countries.length; i++){
  if (countries[i].length > length){
    length = countries[i].length;
    country = countries[i];
  }
}
console.log(country);

//2.Extract all the countries contain the word 'land' from the countries array and print it as array
let newArr = []
for(let i = 0; i < countries.length; i++){
  if (countries[i].includes('land')){
      newArr.push(countries[i])
}
}
console.log(newArr);

//3.Extract all the countries containing two or more words from the countries array and print it as array
let newArr1 = []
for(let i = 0; i < countries.length; i++){
  if (countries[i].split(' ').length >= 2){
      newArr1.push(countries[i])
}
}
console.log(newArr1);


//4.Reverse the countries array and capitalize each country and stored it as an array
let newArr2 = [];
for(let i = countries.length-1; i >= 0; i--){
      newArr2.push(countries[i].toUpperCase());
}
console.log(newArr2); 
 */