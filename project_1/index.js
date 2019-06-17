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
// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

appData.moneyPerDay = appData.cash / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
if(appData.moneyPerDay < 100){
    console.log("Низкий уровень дохода");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень дохода");
}else if(appData.moneyPerDay > 2000){
    console.log("Высокий уровень дохода");
}else{
    console.log("Произошла Ошибка")
};


