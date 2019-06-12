`use strict`
let money = prompt("You money on this month?", ""),
time = prompt("Enter today Date in format YYYY-MM-DD", "");
const appData = {
    cash : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
// console.log(typeof(+appData.cash));
alert(appData.cash / 30);


