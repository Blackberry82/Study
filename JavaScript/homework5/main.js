// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num = [4, 2, 6, 10];
// let mid = (array) => {
//   let sum = 0;
//     for (let item of array) {
//         sum += item;
//     }
//     return sum /2
// }
// console.log(mid(num));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let cont = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (let item of arg) {
//         if (item < min) {
//             min = item
//     } else if (item > max) {
//         max = item
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(cont(5, 35, 2, 10));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//
//         arr.push(Math.round(Math.random() * 100));
//         arr[i] = Math.round(Math.random());
//     }
//     return arr;
// }
// console.log(random());
// let random = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         // arr.push(Math.round(Math.random() * 100));
//         arr[i] = Math.round(Math.random());
//     }
//     return arr;
// }
// console.log(random());
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let ran = (limit, lim) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr.push(Math.round(Math.random() * 100));
//         arr[i] = Math.round(Math.random() * lim);
//
//     }
//     return arr;
// }
// console.log(ran(5, 50));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let start = [1, 2, 3];
// let revers = (array) => {
//     let finish = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         finish.push(array[i]);
//     }
//     return finish;
// }
// console.log(revers(start));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let sun = [
//     {age: 22},
//     {age: 33}
// ];
// let turn = (array) => [array[0], array[1]] = [array[1], array[0]];
// console.log(turn(sun));
// let turn = (array) => {
//     let x = array[0];
//     array[0] = array[1];
//     array[1] = x;
//
//     return array;
// }
// console.log(turn(sun));


//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a, b) => a * b;
// console.log(square(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let round = (r) => 3.14 * (r * r);
// console.log(round(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cilinder = (h, r) => (2 * 3.14) * h * r;
// console.log(cilinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let x = [2,4,5,8];
// let dik = (arr) => {
//     for (let item of arr) {
//         console.log(item)
//     }
// }
// dik(x);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par = (text) =>
//     document.write(`<p>${text}</p>`);
// par('sunny');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let offer = (massage) => {
//     document.write(`
//     <ul>
//     <li>${massage}</li>
//     <li>${massage}</li>
//     <li>${massage}</li>
//
//     </ul>
//     `)
// }
// offer('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let offer1 = (message, num) => {
//     for (let i = 0; i < num; i++) {
//
//         document.write(` <ul>
//
//     <li>${message}</li>
//
//     </ul>`)
//     }
// }
// offer1('hello', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass = [33, 'hello', false];
// let massiv = (arr) => {
//     let item = arr;
//     for (let item of arr) {
//         console.log(item)
//     }
// }
// massiv(mass);


// - створити функцію яка повертає найменьше число з масиву
// let line = [6, 5, 8, 10];
// let min = (arr) => {
//     let x = arr[0];
//     for (let item of arr) {
//        if (item < x) {
//            x = item;
//        }
//     }
//     console.log(x);
// }
// min(line);


// - створити функцію яка приймає масив чисел, сумує начення елементів масиву та повертає його. Приклад [1,2,10]->13
// let nums = [3, 2, 5, 6];
// let sum = (arr)=> {
//     let y = 0;
//     for (let item of arr) {
//         y = y + item;
//     }
//     return y;
// }
// console.log(sum(nums));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let cats = [
//     {id: 1, name: 'Stepan', age: 2},
//     {id: 2, name: 'Musja', age: 11}
// ];
// let lucky = (array) => {
//     document.write(`<div>`);
//     for (let item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
//     document.write(`</div>`);
// }
// lucky(cats);
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let num = (num1, num2, num3, ...arg) => {
let min = arg[0];
    for (let elm of arg) {
        if (elm < min) {
            min = elm;
        }
    }
}
console.log(num(2, 4, 6));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// let erst = [22,4,54,88];
// let max = (arr) => {
//     let x = arr[0];
//     for (let item of arr) {
//         if (item > x) {
//             x = item;
//         }
//     }
//     console.log(x);
// }
// max(erst);

// - створити функцію яка повертає найменьше число з масиву
// let ende = [3, 33, 1, 2];
// let min = (arr) => {
//     let x = arr[0];
//     for (let x1 of arr) {
//         if (x1 < x) {
//             x = x1;
//         }
//     }
//     console.log(x);
// }
// min(ende);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = [5, 10, 15, 20];
// let calc = (arr) => {
//     let x = 0;
//     for (let item of arr) {
//         x += item;
//     }
//     return x;
// }
// console.log(calc(sum));


// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

