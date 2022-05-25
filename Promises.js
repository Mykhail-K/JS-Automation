//Print out all the cat names in to catNames variable
//const catsAPI = 'https://api.thecatapi.com/v1/breeds';

let catNamesArray = []
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
     .then(response => response.json())
     .then(data => {
        catNamesArray = data.forEach(el => {
        catNamesArray.push(el.name)
        })
    })
    console.log(catNamesArray)   */

let catNamesArray = []
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
     .then(response => response.json())
     .then(data => {
        catNamesArray = data.map(el => el.name)
        console.log(catNamesArray)
    })
     .catch((error) => console.log(error)); */