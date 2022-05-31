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
//     document.write(`</div>`);
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

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function x (...arg) {
//     let min = arg[0];
//     for (let item of arg) {
//         if (item < min) {
//             min = item
//         }
//     }
//     return min;
// }
// console.log(x(10, 2, 35));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let x = (...arg) => {
//     let max = arg[0];
//     for (let item of arg) {
//         if (item > max) {
//             max = item;
//         }
//     }
//     return max;
// }
// console.log(x(33, 44, 11, 22));

// - створити функцію яка повертає найбільше число з масиву
let arr = [11,22,33];
// let x = (array) => {
//     let max = array[0];
//     for (let item of array) {
//         if (item > max) {
//             max = item
//         }
//     }
//     return max;
// }
// console.log(x(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let mit = (array) => {
    let sum = 0;
    for (let item of array) {
            sum += item;
    }
    return sum / array.length;
}
console.log(mit(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let st = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (let item of arg) {
//         if (item < min) {
//             min = item;
//         } else if (item > max) {
//             max = item;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(st(11, 22, 33, 44));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3];
// let rever = (array) => {
//     let back = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         back.push(array[i]);
//     }
//     return back;
// }
// console.log(rever(arr));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// let x = (a, b) => {
//     console.log(a);
//     console.log(`${a + b} || ${'a' + 'b'}`);
// }
// x(2, 3 );

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let num1 = [1,2,3,4];
// let num2 = [2,3,4,5];
// let sum = (arr1, arr2) => {
//    let num3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//        num3.push(arr1[i] + arr2[i]);
//     }
//     return num3;
// }
// console.log(sum(num1, num2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let user = [{name: 'Lena', age: 34, contry: 'Germany'}];
// let schlussel = (array) => {
//     let arr = [];
//     for (let item of array) {
//         for (let itemKey in item) {
//             arr = console.log(itemKey);
//         }
//     }
//   return arr;
// }
// schlussel(user);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let peop = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let all = (array) => {
//     for (let Element of array) {
//         for (let Key in Element) {
//             console.log(Element[Key]);
//         }
//     }
// }
// all(peop);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
