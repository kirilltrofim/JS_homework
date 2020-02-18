let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};//

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательну статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдеться?", '');
//     if (typeof (a) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {

//     }
// }
    
let i;
// do {
//     let a = prompt("Введите обязательну статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдеться?", '');
//         i++;
//         if (typeof (a) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50 ) {
//          console.log("done");
//           appData.expenses[a] = b;
//           } else { }
// } while ( i < 2 );

    while ( i < 2 ){
        let a = prompt("Введите обязательну статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдеться?", '');
            i++;
            if (typeof (a) == 'string' && (typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50 ) {
             console.log("done");
              appData.expenses[a] = b;
              } else { }
    }
    

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("MIN");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("MIDDLE");
} else if (appData.moneyPerDay > 2000) {
    console.log("MAX");
} else console.log ("ERROR");