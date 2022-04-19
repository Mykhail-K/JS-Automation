function personAccount () {
    let firstName = 'Mykhail';
    let lastName = 'Kaziuta';
    let incomes = [
        {income: 1000, description: 'salary from first job'},
        {income: 1000, description: 'courses'},
        {income: 5000, description: 'money from business'}
    ];
    let expenses = [
        {expense: 300, description: 'Food'},
        {expense: 100, description: 'Sport'},
        {expense: 400, description: 'Vacations'},
        {expense: 200, description: 'Health'}
    ];
    function totalIncome () {
        let calcTotalIncome = 0;
        for (const inc of incomes) {
        calcTotalIncome += inc.income;
        }
        return calcTotalIncome;
    }
    function totalExpense () {
        let calcTotalExpense = 0;
        for (const exp of expenses) {
        calcTotalExpense += exp.expense;
        };
        return calcTotalExpense;
    };
    function accountInfo () {
        return `Account User: ${firstName} ${lastName}`;  
    };
    function accountBalance () {
        let calcBalance = totalIncome() - totalExpense();
        return `Account balance: ${calcBalance}`;
    };
    function addIncome (newIncome) {
        incomes.push(newIncome);
        return `Added ${newIncome.income} dollars of incomes`;
    };
    function addExpense (newExpense) {
        expenses.push(newExpense);
        return `Added ${newExpense.expense} dollars of expenses`;
    };
    return {
        totalIncome : totalIncome (),
        totalExpense : totalExpense (),
        accountInfo : accountInfo (),
        addIncome : addIncome ({income: 1000, description: 'Added income'}),
        addExpense : addExpense ({expense: 500, description: 'Added expense'}),
        accountBalance : accountBalance (),
    };
};
const innerFuncs = personAccount();
console.log(innerFuncs.accountInfo);
console.log(`Total income: ${innerFuncs.totalIncome}`);
console.log(`Total expense: ${innerFuncs.totalExpense}`);
console.log(innerFuncs.addIncome);
console.log(innerFuncs.addExpense);
console.log(innerFuncs.accountBalance);