// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// First resolve
// let button = document.getElementsByTagName('button')[0];
// console.log(button);
// let text = document.getElementById('text');
// button.onclick = function () {
//     console.log('click');
//     text.innerText = '';
// }
// Second resolve
// const elem = document.createElement('div');
// elem.setAttribute('id', 'text');
// elem.innerHTML = '<h1>Hello, my life!!!!</h1>';
// const but = document.createElement('button');
// but.innerText = 'OK';
// document.body.append(elem, but);
// but.addEventListener('click', function () {
//     // elem.style.display = 'none';
//     elem.remove();
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// First resolve
// let age = document.getElementById('age');
// let alt = document.getElementsByClassName('alt')[0];
// alt.onclick = function () {
//     console.log(age.value);
//     if (age.value < 18) {
//         let baby = alert('You are not enough adult');
//     }
//     age.value = '';
// }
// Second resolve
// const label = document.createElement('label');
// label.innerText = 'Say me your age';
// const input = document.createElement('input');
// input.type = 'number';
// const but = document.createElement('button');
// but.innerText = 'OK';
// label.appendChild(input);
// document.body.append(label,but);
// but.addEventListener('click', function () {
//     if (input.value >= 18) {
//         alert('Welcome')
//     }else  if (input.value === '') {
//         alert('error');
//     }
//     else {
//         alert('Good bye!!!')
//     }
//     input.value = '';
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки).
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// First resolve
// let button = document.getElementsByTagName('button')[0];
// button.onclick = function () {
//     console.log(form1.login.value + ' --- ' + form1.email.value);
//     console.log(form2.login2.value + ' --- ' + form2.email2.value);
//     form1.login.value = '';
//     form1.email.value = '';
//     form2.login2.value = '';
//     form2.email2.value = '';
// }
// Second resolve
// const but = document.getElementsByTagName('button')[0];
// but.addEventListener('click', function () {
//     console.log(form1.login.value);
//     console.log(form1.email.value);
//     console.log(form2.login2.value);
//     console.log(form2.email2.value);
//     form1.login.value = '';
//     form1.email.value = '';
//     form2.login2.value = '';
//     form2.email2.value = '';
//
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// const row = document.createElement('input');
// const column = document.createElement('input');
// const data = document.createElement('input');
// const button = document.createElement('button');
// button.innerText = 'OK';
// document.body.append(row,column, data, button);
// button.addEventListener('click', function () {
//     const tr = row.value;
//     const td = column.value;
//     const text = data.value;
//     function foo(tr, td, text) {
//         const table = document.createElement('table');
//         document.body.appendChild(table);
//         for (let i = 0; i < tr; i++) {
//           const x = document.createElement('tr');
//           table.appendChild(x);
//             for (let j = 0; j < td; j++) {
//                const y = document.createElement('td');
//                y.innerText = `${text}`;
//                y.style.background = 'orangered';
//                y.style.border = '1.5px solid black';
//                x.appendChild(y);
//             }
//
//         }
//     }
//     foo(tr, td, text);
// })

// !!! TUGGLE!!!!
// const boxxx = document.getElementsByClassName('box')[0];
// const  container = document.getElementsByClassName('cont')[0];
//
// container.onclick = function () {
//     boxxx.classList.toggle('hidden');
// }

// const menuElem = document.getElementsByClassName('menu')[0];
// const titleElem = document.getElementsByClassName('title')[0];
//
// titleElem.onclick = function () {
//     menuElem.classList.toggle('hidden');
// }

//     - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
//
//
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const form = document.forms.f1;
const cont = document.getElementsByClassName('content')[0];
const div = (users) => {
    cont.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerText = JSON.stringify(user);
        cont.appendChild(userDiv);
    })
}
div(usersWithAddress);
form.onchange = () => {
    let group = usersWithAddress;
    if (form.status.checked) {
        group = group.filter(value => !value.status);
    }
    if (form.age.checked) {
        group = group.filter(value => value.age >= 29);
    }
    if (form.city.checked) {
        group = group.filter(value => value.address.city === 'Kyiv');
    }
    div(group);
}
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан





