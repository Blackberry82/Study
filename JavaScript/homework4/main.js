// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     return a * b;
// }
// let result = square(10, 20);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round(r) {
//  let res = 3.14 * (r * r);
//  return res;
// };
// console.log(round(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(r, h) {
//     let res = (2 * 3.14) * r * h;
//     return res;
// }
//
// console.log(cylinder(5, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент
// function masyv(array) {
//     for (const element of array) {
//         console.log(element);
//     };
// };
//     let users = [
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
//    masyv(users);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragr(text) {
//     document.write(`<p>${text}</p>`);
// };
// paragr('sun is yellow');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function offer(text) {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// };
// let result = offer('Peace for Ukraine');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function box(text, x) {
//     document.write(`<ul>`);
//     for (let i = 0; i < x; i++) {
//         document.write(`<li>${text}</li>`);
//     };
//     document.write(`</ul>`);
// };
// let result = box('We are the champions',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = [2, 'fond', true];
// function row(array) {
//     let item = array[0];
//     for (const item of array) {
//         document.write(`<div>${item}</div>`);
//     };
// };
// console.log(row(mas));


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'Vlasta', age: 33},
//     {id: 2, name: 'Arnold', age: 31},
//     {id: 3, name: 'Nina', age: 22},
//     {id: 4, name: 'Vera', age: 18},
//     ];
// function person(array) {
//     document.write(`<div>`);
//     for (const user of array) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
//     document.write(`<div>`);
// }
// let man = person(users);


// - створити функцію яка повертає найменьше число з масиву
// let x = [7, 6, -8, 10];
// function num(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
//
// console.log(num(x));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let x = [3, 7, 8, 10];
// function sum(array) {
//     let num = 0;
//     for (const item of array) {
//         num = num + item;
//
//     }
//     return num;
// };
// console.log(sum(x));