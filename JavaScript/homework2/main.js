/*/!*let x = 1;*!/
if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}*/


/*
let x = 0;
if (x !== 0) {
    console.log(true);
} else
    console.log(false);
*/

// let x = -3;
// if (x !==0) {
//     console.log(true);
// } else {
//     console.log(false);
// }


/*let time = +prompt('enter from 0 to 59');
  if (time <= 14) {
    console.log('quater1');
  } else if (time >= 15 && time <=29) {
    console.log('quater2');
} else if (time >=30 && time <=44) {
    console.log('quater3');
} else if (time >=45 && time <= 59) {
      console.log('quater4');
  } else {
      console.log('?????');
  }*/


//
// let day = +prompt('enter from 1 to 31');
// if (day <= 10) {
//     console.log('decade 1');
// }  else if (day >=11 && day <=20) {
//     console.log('decade 2');
// }  else if(day >=21 && day <=31) {
//     console.log('decade 3');
// } else {
//     console.log('!!!!!');
// }

/*
let week = +prompt('enter number of day');
switch (week) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
 default:
        console.log('???????');
}
*/

// let a  = 0;
// let b = 0;
// if (a > b) {
//     console.log('a');
// } else if (a < b){
//     console.log(b);
// } else if (a === b){
//     console.log('equal');
// }
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
let y =[1, 2,]
function getSum(array) {
    let x = array.length;
        if (x >= 3) {
            document.write('<div>It is big array</div>');
        } else {
            document.write('<div>It is little array</div>');
        }
}
// getSum(y);

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
const name = prompt('Яка «офіційна» назва JavaScript?');
if (name === 'ECMAScript') {
    document.write('<div>Правильно!</div>');
} else {
    document.write('<div>Не знаєте? ECMAScript!</div>')
}
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    // Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
