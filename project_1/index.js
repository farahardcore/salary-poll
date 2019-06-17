`use strict`
let money,time;
function start() {
    money = prompt("You money on this month?", "");
    time = prompt("Enter today Date in format YYYY-MM-DD", "");
    while(isNaN(money)||money == "" || money == null){
        money = prompt("You money on this month?", "");
    }
}
start();

const appData = {
    cash : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
}
function chooseExpenses() {
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
};
}
chooseExpenses();


function detectDayCash() {
    appData.moneyPerDay = (appData.cash / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    
}
detectDayCash();
function detectLevelIncome() {
    if(appData.moneyPerDay < 100){
        console.log("Низкий уровень дохода");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень дохода");
    }else if(appData.moneyPerDay > 2000){
        console.log("Высокий уровень дохода");
    }else{
        console.log("Произошла Ошибка")
    }
}
detectLevelIncome();

function checkSavings() {
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с текущего дипозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    for(let i = 0;i < 3;i++){
        let questionsOptExpenses = prompt("Статья необязателных расходов");
        appData.optionalExpenses[i+1] = questionsOptExpenses;
        console.log(typeof(appData.questionsOptExpenses));
        if(typeof(appData.questionsOptExpenses == undefined)){
            console.log("non-binding expenses");
        }

    }
}
chooseOptExpenses();

