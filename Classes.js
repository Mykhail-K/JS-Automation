// 1.Create an Animal class. The class will have name, age, color, legs properties and create different methods
// 2.Create a Dog and Cat child class from the Animal Class.
// 3.Override the method you create in Animal class
      /* class Animals {
        constructor (name, age, color, legs){
           this.name = name;
           this.age = age;
           this.color = color;
           this.legs = legs;
        }
      get getName (){
         return this.name;
      }
      get getAge (){
         return this.age;
      }
      get getColor (){
         return this.color;
      }
      get getLegs (){
         return this.legs;
      }
     }
     const animals = new Animals('Fufa', 5, 'grey', 4) 
     console.log(animals.getName);

     class Dog extends Animals {
         displayName (){
           console.log(`The dog name is ${this.name}`)
        }
     }
     const dog = new Dog('Deizy', 10, 'White', 4);
     console.log(dog.getColor);
     console.log(dog.displayName());

     class Cat extends Animals {
        constructor (name, age, color, legs, size){
           super (name, age, color, legs);
           this.size = size;
        }
         defineSize () {
           this.size >=5 ? console.log(`The cat is BIG`) : console.log(`The cat is SMALL`)
        }
     }
    const cat = new Cat('Meow', 2, 'Green', 4, 5);
    console.log(cat.defineSize()); */
 

    

// 4. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

   /* class PersonAccount {
      constructor (firstname, lastname, incomes, expenses){
         this.firstname = firstname;
         this.lastname = lastname;
         this.incomes = incomes;
         this.expenses = expenses;
      };
      totalIncome () {
         let calcTotalIncome = 0;
         this.incomes.forEach(inc => {
            calcTotalIncome += inc.income
         });
         return calcTotalIncome;
      };
      totalExpense () {
         let calcTotalExpense = 0;
         this.expenses.forEach(exp => {
            calcTotalExpense += exp.expense
         });
         return calcTotalExpense;
      };
      accountInfo () {
         return `Account User: ${this.firstname} ${this.lastname}`;
      };
      addIncome (newIncome) {
         this.incomes.push(newIncome)
         return `Added ${newIncome.income} dollars of income`;
      };
      addExpense (newExpense) {
         this.expenses.push(newExpense)
         return `Added ${newExpense.expense} dollars of expense`;
      };
      accountBalance () {
         let calcBalance = this.totalIncome () - this.totalExpense ()
         return `Account balance: ${calcBalance} dollars`
      };
   }
   const personAccount = new PersonAccount('Mike', 'Kaziuta', [{income: 2000, description: 'salary1'}, {income: 3000, description: 'salary2'}], [{expense: 500, description: 'Food'}, {expense: 1000, description: 'Rent'}]);
   let myNewIncome = {income: 1000, description: 'cources'};
   let myNewExpence = {expense: 500, description: 'car'};

   console.log(personAccount.totalIncome());
   console.log(personAccount.totalExpense());
   console.log(personAccount.addIncome(myNewIncome));
   console.log(personAccount.addExpense(myNewExpence));
   console.log(personAccount.accountInfo());
   console.log(personAccount.accountBalance()); */

    
   
   
//6. You'll need to implement inheritance in JS: a base class Employee that takes a single data object,
// two derived from it classes: Manager and BlueCollarWorker, and two more classes that inherit from Manager: HRManager and SalesManager.
    /* class Employee {
      static EMPLOYEES = [];
      constructor (id, firstName, lastName, birthday, salary, position, department){
         this.id = id;
         this.firstName = firstName;
         this.lastName = lastName;
         this.birthday = birthday;
         this.salary = salary;
         this.position = position;
         this.department = department;
         this.age = new Date().getFullYear() - new Date(birthday).getFullYear();
         this.fullName = `${this.firstName} + ${this.lastName}`;
         Employee.EMPLOYEES.push(this);
      };
         quit () {
            Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this), 1)
         };
         retire() {
            console.log("It was such a pleasure to work with you!")
            this.quit();
         };
         getFired() {
            console.log("Not a big deal!")
            this.quit();
         }
         changeDepartment(newDepartment) {
            this.department = newDepartment;
         };
         changePosition(newPosition) {
            this.position = newPosition;
         };
         changeSalary(newSalary) {
            this.salary = newSalary;
         };
         getPromoted(benefits) {
            Object.keys(benefits).forEach(el =>{
              if (el === 'department') {
                  console.log("Yoohooo1!");
                  this.changeDepartment(benefits.department);
              };
              if (el === 'position') {
                  console.log("Yoohooo2!");
                  this.changePosition(benefits.position);
              };
              if (el === 'salary') {
                  console.log("Yoohooo3!");
                  this.changeSalary(benefits.salary);
              };
            });
         };
         getDemoted(punishment) {
            Object.keys(punishment).forEach(el =>{
               if (el === 'department') {
                   console.log("Damn1!");
                   this.changeDepartment(punishment.department);
               };
               if (el === 'position') {
                   console.log("Damn2!");
                   this.changePosition(punishment.position);
               };
               if (el === 'salary') {
                   console.log("Damn3!");
                   this.changeSalary(punishment.salary);
               };
             });
         };
      };      
   class Manager extends Employee {
      constructor (id, firstName, lastName, birthday, salary, position = null, department) {
         super (id, firstName, lastName, birthday, salary, position = 'manager', department);
            //this.position = 'manager';
            this.managedPersons = [];
      };
      managedEmployees() {
         Employee.EMPLOYEES.forEach(el => {
            if (el.position !== 'manager' && el.department === this.department) {
               this.managedPersons.push(el) 
            };
         });
      };
   };

   class BlueCollarWorker extends Employee {
   };

   class HRManager extends Manager {
      constructor (id, firstName, lastName, birthday, salary, position = null) {
         super (id, firstName, lastName, birthday, salary, position = 'hr');
      };
   };
   class SalesManager extends Manager {
      constructor (id, firstName, lastName, birthday, salary, position = null) {
         super (id, firstName, lastName, birthday, salary, position = 'sales');
      };
   };


   const person1 = new Employee(1, 'Mike', 'Kaziuta', '1990,10,12', 3000, 'QA', 'Testing');
   const person2 = new Employee(2, 'Anna', 'Smith', '1990,01,10', 1000, 'Developer', 'FrontEnd');
   const person3 = new Employee(3, 'Jim', 'Jones', '1998,02,11', 2000, 'Developer', 'BackEnd');
   const manager = new Manager(4, 'Sam', 'Lewis', '1977,05,06', 5000, null, 'BackEnd');
   const hrmanager = new HRManager(5, 'Kate', 'Wilson', '1989,09,07', 2300, null);
   const salesmanager = new SalesManager(6, 'David', 'Miles', '1968,02,02', 5300, null);
   
   person1.getPromoted({position: 'Developer', salary: 1000, department: 'BACK'})
   console.log(person1) */
  // person1.getDemoted({position: 'Developer123'})
  //manager.managedEmployees()
  //console.log(manager.managedPersons)
  //console.log(Employee.EMPLOYEES)




//5. You'll need to implement 3 classes: a Deck , a Card and a Player classes.
   /* class Deck {
    constructor () {
       this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
    };
    shuffle () {
        this.cards.sort(() => Math.random() - 0.5);
    };
    draw (n) {
       let removedCards = this.cards.splice(this.cards.length-n, n)
       console.log(removedCards)
       return removedCards
    };
 };
   class Cards {
    static ranks = {1:'Ace', 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:'Jack', 12:'Queen', 13:'King'};
    static suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    constructor (rank, suit) {
       this.rank = rank;
       this.suit = suit;
       this.isFaceCard = this.rank === 1 || this.rank > 10;

     toString () {
        let cardRank = Cards.ranks[this.rank]
        console.log (`${cardRank} of ${this.suit}`)
     };
     compare (cardOne, cardTwo) {
   
     };
   };
   };

 cards = new Deck()
 //cards.shuffle()
 console.log(cards)
 cards.draw(11) 
  */

