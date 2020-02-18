let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательну статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдеться?", '');
    appData.expenses[a] = b;
}
alert("Бюджет на 1 день " + money / 30);