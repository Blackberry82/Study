// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// let user = new User(1, 'Iryna', 'Myrska', 'asdfg@gmail.com',+42045637832);
// console.log(user);
// let user1 = new  User(1,'Ivan','Bojko','ksfjdks@gmail.com',345742579);
// console.log(user1);
// let user2 = new  User(2,'Vadym','Moroz','ksfrtks@gmail.com',345742539);
// console.log(user2);
// let user3 = new  User(3,'Olga','Gnatenko','ksfjsds@gmail.com',345752579);
// console.log(user3);
// let user4 = new  User(4,'Vera','Redko','kshjdks@gmail.com',345741579);
// console.log(user4);
// let user5 = new  User(5,'Petro','Harus','kswcdks@gmail.com',340942579);
// console.log(user5);
// let user6 = new  User(6,'Oxana','Pylypenko','ksfbnks@gmail.com',345796579);
// console.log(user6);
// let user7 = new  User(7,'Igor','Procenko','ksfklks@gmail.com',345752579);
// console.log(user7);
// let user8 = new  User(8,'Iryna','Solodka','ksphdks@gmail.com',435742579);
// console.log(user8);
// let user9 = new  User(9,'Olena','Truhina','ksxfdks@gmail.com',354742579);
// console.log(user9);
// let user10 = new  User(10,'Nadija','Tomchenko','ksfrmks@gmail.com',347542579);
// console.log(user10);
// let group = [];
// group.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(group);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let x = group.filter(value => (value.id % 2) === 0);
// console.log(x);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let y = group.sort((a, b) => b.id - a.id);
// console.log(y);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// let customer = [];
// let Client1 = new  Client(1,'Ivan','Bojko','ksfjdks@gmail.com',345742579, ['milk', 'bread']);
// console.log(Client1);
// let Client2 = new  Client(2,'Vadym','Moroz','ksfrtks@gmail.com',345742539, ['tomato', 'apple']);
// console.log(Client2);
// let Client3 = new  Client(3,'Olga','Gnatenko','ksfjsds@gmail.com',345752579, ['porige', 'milk']);
// console.log(Client3);
// let Client4 = new  Client(4,'Vera','Redko','kshjdks@gmail.com',345741579, ['banana', 'orange']);
// console.log(Client4);
// let Client5 = new  Client(5,'Petro','Harus','kswcdks@gmail.com',340942579, ['meat', 'potato', 'juice']);
// console.log(Client5);
// let Client6 = new  Client(6,'Oxana','Pylypenko','ksfbnks@gmail.com',345796579, ['fish', 'vegitables']);
// console.log(Client6);
// let Client7 = new  Client(7,'Igor','Procenko','ksfklks@gmail.com',345752579, ['carrot', 'cucumber']);
// console.log(Client7);
// let Client8 = new  Client(8,'Iryna','Solodka','ksphdks@gmail.com',435742579, ['kivi', 'apricot','ananas', 'avocado']);
// console.log(Client8);
// let Client9 = new  Client(9,'Olena','Truhina','ksxfdks@gmail.com',354742579, ['cake', 'tea', 'candes','sousige','butter']);
// console.log(Client9);
// let Client10 = new  Client(10,'Nadija','Tomchenko','ksfrmks@gmail.com',347542579, ['coffee', 'chease']);
// console.log(Client10);
// customer.push(Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10);
// console.log(customer);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const xx = customer.sort((a, b) => b.order.length - a.order.length);
// console.log(xx);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         this.info = function () {
//             for (const item in this) {
//             }
//             console.log(`${item} - ${this[item]}`);
//         }
//         this.increaseMaxSpeed = function (newSpeed){
//             // console.log(this.maxSpeed + newSpeed);
//             this.maxSpeed += newSpeed;
//         }
//         this.changeYear = function(newValue) {
//             this.year = newValue;
//         }
//         this.addDriver = function(driver) {
//             this.driver = driver;
//         }
// }
// const x = new Car('C100', 'Honda',2020, 200, 1500);
// console.log(x);
// x.drive();
// // x.info();
// x.increaseMaxSpeed(50);
// x.changeYear(2021);
// x.addDriver('Andriy');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor (model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
    // info () {
    //     for (const Key in this) {
    //     }
    //     console.log(Key, this[Key]);
    // }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
// let auto = new Car('C20', 'hundiy', 2022, 230, 1400);
// console.log(auto);
// auto.drive();
// // auto.info();
// auto.increaseMaxSpeed(50);
// auto.changeYear(2021);
// auto.addDriver('Andriy');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
// const cinderella1 = new Cinderella('Maria', 32, 34);
// console.log(cinderella1);
// const cinderella2 = new Cinderella('Dascha', 33, 33);
// const cinderella3 = new Cinderella('Olja',22, 35);
// const cinderella4 = new Cinderella('Sveta', 12, 36);
// const cinderella5 = new Cinderella('Natascha', 15, 37);
// const cinderella6 = new Cinderella('Katya', 16, 38);
// const cinderella7 = new Cinderella('Valya', 17, 39);
// const cinderella8 = new Cinderella('Sofia', 18, 40);
// const cinderella9 = new Cinderella('lena', 19, 32);
// const cinderella10 = new Cinderella('Oxana', 20, 35);
// const cinderella = [];
// cinderella.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
// console.log(cinderella);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, findShue) {
//         this.name = name;
//         this.age = age;
//         this.findShue = findShue;
//     }
// }
// const prince = new Prince('Zlatan', 35, 36);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// function theOne(arr, prince) {
//     for (const item of arr) {
//        if (item.legSize === prince.findShue) {
//            console.log(`${item.name}`);
//        }
//     }
//
// }
// theOne(cinderella, prince);
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// const oneLove = cinderella.find(value => value.legSize === prince.findShue);
// console.log(oneLove);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str, n) {
    let x = [];
    for (let i = 0; i < str.length; i += n) {
      x.push(str.substr(i, n));

    }
    return x;
}
document.writeln(cutString('delightful', 1));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
function delete_characters(str, lenght) {
    let y = [];
    for (i = 0; i < str.length; i += lenght) {
    y.push(str.substr(i, lenght));
}
    return y;
}
document.writeln(delete_characters(str, 7));

// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }