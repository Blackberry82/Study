// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// const f = document.forms.f1;
// f.addEventListener('submit', function (e){
//     e.preventDefault()
//     const user = {name: f.namesur.value, age: f.age.value};
//     localStorage.setItem('person', JSON.stringify(user));
//     f.namesur.value = '';
//     f.age.value = '';
// })

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// const form = document.forms.f2;
// const cars = [];
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const car = {model: this.model.value, type: this.type.value, volume: this.volume.value};
//     cars.push(car);
//     localStorage.setItem('cars', JSON.stringify(cars));
//     this.model.value = '';
//     this.type.value = '';
//     this.volume.value = '';
// })


// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
const  favorites = [];
const divBlock = document.getElementById('container');
const btn = document.createElement('button');
btn.innerText = 'OK';
divBlock.append(btn);
document.body.append(divBlock);









