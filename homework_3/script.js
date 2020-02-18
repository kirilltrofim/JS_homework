'use strict';
let money, time;

function start() {

    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательну статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдеться?", '');
        if (typeof (a) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}
chooseExpenses();




function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();


    alert("Бюджет на 1 день: " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("MIN");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("MIDDLE");
    } else if (appData.moneyPerDay > 2000) {
        console.log("MAX");
    } else console.log("ERROR");
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}