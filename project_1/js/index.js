`use strict`
let startCount = document.getElementById("start"),
    badValue = document.getElementsByClassName("budget-value"),
    dayBadValue = document.getElementsByClassName("daybudget-value"),
    levValue = document.getElementsByClassName("level-value"),
    expValue = document.getElementsByClassName("expenses-value"),
    optExpValue = document.getElementsByClassName("optionalexpenses-value"),
    incValue = document.getElementsByClassName("income-value"),
    monthValue = document.getElementsByClassName("monthsavings-value"),
    yearValue = document.getElementsByClassName("yearsavings-value");
    expItem = document.querySelectorAll(".expenses-item"),
    console.log(expItem);
    expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optExpInput = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    var money;
    var time;
var goStart = function() {
    money = prompt("You money on this month?", "");
    time = prompt("Enter today Date in format YYYY-MM-DD", "");
    while(isNaN(money)||money == "" || money == null){
        money = prompt("You money on this month?", "");
    }
}
goStart();

const appData = {
    cash : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses : function() {
        for (let i=0; i < 2;i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
                if( (typeof(a))==="string" && (typeof(a) != null) && (typeof(b) != null)
                && a != "" && b != "" && a.length<50){
                    console.log("done");
                    appData.expenses[a] = b;
                }else{
                    console.log("Bad result");
                    break;
                }
        }
    },
    detectDayCash : function() {
        appData.moneyPerDay = (appData.cash / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevelIncome : function() {
        if(appData.moneyPerDay < 100){
            console.log("Низкий уровень дохода");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень дохода");
        }else if(appData.moneyPerDay > 2000){
            console.log("Высокий уровень дохода");
        }else{
            console.log("Произошла Ошибка")
        }
    },
    checkSavings : function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с текущего дипозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses : function() {
        for(let i = 0;i < 3;i++){
            let questionsOptExpenses = prompt("Статья необязателных расходов");
            appData.optionalExpenses[i+1] = questionsOptExpenses;
            console.log(typeof(appData.questionsOptExpenses));
            if(typeof(appData.questionsOptExpenses == undefined)){
                console.log("non-binding expenses");
            }
        }
    },
    chooseIncome : function() {
        let items = prompt("Что принесёт дополнительный доход?(Перечислите через запятую)", " ");
        if(typeof(items) != "string" || (typeof(items) == null)
        || items == ""){
            console.log("Ты ввёл неправильные данные гомосек!")
        }else{
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
        };
        this.income.forEach( function(item, i){
           alert("Способы дополнительного заработка: " + (i + 1) + " - " + item);
        });
    },
    drawAppData : function() {
        for(let key in appData){
            console.log("Наша программа включает в себя данные: "+ key + " - " +appData[key]);
        }
    }
}



