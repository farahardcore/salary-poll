`use strict`
let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let money, time;
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
startBtn.addEventListener("click", function() {
    time = prompt("Enter today Date in format YYYY-MM-DD", "");
    money = prompt("You money on this month?", "");
    while(isNaN(money)||money == "" || money == null){
        money = prompt("You money on this month?", "");
    };
    appData.cash = money;
    appData.timeData = time;
    budgetValue.textContent = money;
    console.log(budgetValue);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});
expensesBtn.addEventListener("click", function() {
    let sum = 0;
    for (let i=0; i < expensesItem.length;i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
            if( (typeof(a))==="string" && (typeof(a) != null) && (typeof(b) != null)
            && a != "" && b != "" && a.length<50){
                console.log("done");
                appData.expenses[a] = b;
                sum += +b
            }else{
                console.log("Bad result");
                break;
            }
    }
    expensesValue.textContent = sum;
});
countBtn.addEventListener("click", function() {
    if(appData.cash != undefined) {
        let dis = expensesValue.textContent;
        appData.moneyPerDay = ((appData.cash - dis) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if(appData.moneyPerDay < 100){
            levelValue.textContent = "Низкий уровень дохода";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний уровень дохода";
        }else if(appData.moneyPerDay > 2000){
            levelValue.textContent = "Высокий уровень дохода";
        }else{
            levelValue.textContent = "Произошла Ошибка";
    }
    }else{
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});
optionalExpensesBtn.addEventListener("click", function() {
    for(let i = 0;i < optionalExpensesItem.length;i++){
        let questionsOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionsOptExpenses;
       optionalExpensesValue.textContent +=appData.optionalExpenses[i] + " ";
        }
});
incomeItem.addEventListener("change", function(){
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});
checkSavings.addEventListener("click", function() {
    if(appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});
sumValue.addEventListener("input", function(){
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});
percentValue.addEventListener("input", function(){
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});
const appData = {
    cash : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
};



