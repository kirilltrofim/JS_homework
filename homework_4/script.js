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
    saving: true,


    chooseExpenses: function () {
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
    },


    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },


    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appData.moneyPerDay + "руб.");
    },


    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("MIN");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("MIDDLE");
        } else if (appData.moneyPerDay > 2000) {
            console.log("MAX");
        } else console.log("ERROR");
    },


    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислете через запятую)","");
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
    }
};      // сделать дз