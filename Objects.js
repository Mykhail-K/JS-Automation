/* const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
} */

//1. Find the person who has many skills in the users object
/* function findManySkills () {
  let currSkillsArr = [];
  let currUser = '';
  const userKeys = Object.keys(users);
  for(let i = 0; i < userKeys.length; i++) {
    const user = userKeys[i];
    if (users[user].skills.length > currSkillsArr.length) {
      currSkillsArr = users[uesr].skills;
      currUser = user;
    }
  }
  return `${currUser} has skills ${currSkillsArr.join(', ')}`
}
console.log(findManySkills()); */


//2.Count logged in users, count users having greater than equal to 50 points from the following object
/* function findLoggedUsers () {
  let loggedUsersArr = [];
  let countUsers = 0;
  const userKeys = Object.keys(users);
  for(let i = 0; i < userKeys.length; i++) {
    const user = userKeys[i];
    if (users[user].isLoggedIn === true) {
      loggedUsersArr.push(users[user].isLoggedIn)
      countUsers = loggedUsersArr.length;
      
    }
  }
  return `The number of logged in users - ${countUsers}`;
}
console.log(findLoggedUsers());


function findGraterPoints () {
  let pointsArr = [];
  let countPoints = 0;
  const userKeys = Object.keys(users);
  for(let i = 0; i < userKeys.length; i++) {
    const user = userKeys[i];
    if (users[user].points >= 50) {
      pointsArr.push(users[user].points);
      countPoints = pointsArr.length;
    }
  }
  return `The number of users with greater than or equal to 50 points - ${countPoints}`;
}
console.log(findGraterPoints()); */


/* 3.Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties 
and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */

/* const personAccount = {
  firstName: 'Mike',
  lastName: 'Wilson',
  incomes:[{income: 1000, description: 'salary from first job'}, {income: 300, description: 'courses'}, {income: 200, description: 'salary from second job'}],
  expenses:[{expense: 300, description: 'Food'}, {expense: 100, description: 'Sport'}, {expense: 400, description: 'Vacations'}, {expense: 200, description: 'Health'}],
  totalIncome: function () {
    let totalIncome1 = 0;
    for (let i = 0; i < this.incomes.length; i++){
    totalIncome1 += this.incomes[i].income
    }
    //return `Total Income - ${totalIncome1}`
     return totalIncome1
    },
  totalExpense: function () {
    let totalExpense1 = 0;
    for (let i = 0; i < this.expenses.length; i++){
    totalExpense1 += this.expenses[i].expense
    }
    return totalExpense1
    },
  accountInfo: function () {
    return `Account User - ${this.firstName} ${this.lastName}`
    },
  addIncome: function (newIncome) {
    this.incomes.push(newIncome)
    },
  addExpense: function (newExpense) {
    this.expenses.push(newExpense)
    },
  accountBalance: function () {
    const accountBalance1 = this.totalIncome() - this.totalExpense()
    return `Account balance - ${accountBalance1}`
    }
};
console.log(personAccount.accountInfo());
console.log(`Total Income - ${personAccount.totalIncome()}`);
console.log( `Total Expense - ${personAccount.totalExpense()}`);
console.log(personAccount.accountBalance());
personAccount.addIncome({income: 500, description: 'Added income'});
personAccount.addExpense({expense: 300, description: 'Added expense'});
console.log(personAccount.incomes);
console.log(personAccount.expenses);
console.log(`Total Income - ${personAccount.totalIncome()}`);
console.log( `Total Expense - ${personAccount.totalExpense()}`);
console.log(personAccount.accountBalance());
 */

//4.Imagine you are getting the above users collection from a MongoDB database.
 /* const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false,
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true,
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true,
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false,
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false,
  },
]; */

//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
 /* function signUp (user) {
  for(let i = 0; i < users.length; i++){
   if (user.email === users[i]['email']){
    return console.log('This user already exists')
   }
   }
  users.push(user)
  console.log(user +`The user is created - ${user}`)
  }
  const obj = {"_id":"gdvmg","username":"Alex1","email":"alex2@alex.com","password":"123222","createdAt":"09/03/2021 01:02 PM","isLoggedIn":false}
  signUp(obj)
 */
 
//b. Create a function called signIn which allows user to sign in to the application
/* let email = prompt('Please enter your email: ', '')
let password = prompt('Please enter your password: ', '')
 function signIn (email, password) {
  for(let i = 0; i < users.length; i++){
    if (email === users[i]['email'] && password === users[i]['password'] && users[i]['isLoggedIn'] === false ){
     users[i]['isLoggedIn'] = true 
     return console.log(users[i])
    }
    }
    console.log('You have entered wrong credentials or you are already logged in!!!') 
   }
   signIn(email, password) */


 /* const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];
 */

//1.The products array has three elements and each of them has six properties.
//a. Create a function called rateProduct which rates the product
/* function rateProduct (productNumber) {
  let fullRate = 0;
for (let i = 0; i < products[productNumber].ratings.length; i++) {
fullRate += products[productNumber].ratings[i].rate
} if (fullRate === 0){
    return console.log('This product has not been rated yet!!!')
}
console.log(`Product rate is ${fullRate} points`)
}
rateProduct (2) */

//b. Create a function called averageRating which calculate the average rating of a product
/* function avarageRating (productNumber) {
  let fullRate = 0;
  let avarageRate = 0;
for (let i = 0; i < products[productNumber].ratings.length; i++) {
fullRate += products[productNumber].ratings[i].rate
avarageRate = fullRate / products[productNumber].ratings.length
}
return console.log(`Avarage product rate is ${avarageRate}`) 
}
avarageRating(0) */


//2.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
/* function likeProduct (userID, productNumber){
  for (i = 0; i < products[productNumber].likes.length; i++){
  let like = products[productNumber].likes[i]
  if (like === userID){
  console.log('this like sould be removed:' + like)
  products[productNumber].likes.splice(i, 1)
  return console.log(products[productNumber].likes)
  }
  }
  products[productNumber].likes.push(userID)
  return console.log(products[productNumber].likes)
  }
  likeProduct ('fg12cy', 0) */
