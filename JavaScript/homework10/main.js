// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let button = document.getElementsByTagName('button')[0];
// console.log(button);
// let text = document.getElementById('text');
// button.onclick = function () {
//     console.log('click');
//     text.innerText = '';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let age = document.getElementById('age');
// let alt = document.getElementsByClassName('alt')[0];
// alt.onclick = function () {
//     console.log(age.value);
//     if (age.value < 18) {
//         let baby = alert('You are not enough adult');
//     }
//     age.value = '';
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки).
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let button = document.getElementsByTagName('button')[0];
// button.onclick = function () {
//     console.log(form1.login.value + ' --- ' + form1.email.value);
//     console.log(form2.login2.value + ' --- ' + form2.email2.value);
//     form1.login.value = '';
//     form1.email.value = '';
//     form2.login2.value = '';
//     form2.email2.value = '';
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let button = document.getElementsByTagName('button')[0];
let row = document.getElementById('row');
let column = document.getElementById('column');
let data = document.getElementsByName('data')[0];
button.onclick = function () {
   let table = document.createElement('table');
   let rows = document.createElement('tr');
   rows.innerHTML = `<tr>${row.value}</tr>`;
   document.table.appendChild(rows);
       document.body.appendChild(table);
}
