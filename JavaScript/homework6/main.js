// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let x = 'hello world';
// let x1 = x.length;
// console.log(x1);
// let y = 'lorem ipsum';
// let y1 = y.length;
// console.log(y1);
// let z = 'javascript is cool';
// let z1 = z.length;
// console.log(z1);

// - Перевести до великого регістру наступні стрінгові значення
// let x ='hello world';
// let x1 = x.toUpperCase();
// console.log(x1);
// let y = 'lorem ipsum';
// let y1 = y.toUpperCase();
// console.log(y1);
// let t = 'javascript is cool';
// let t1 = t.toUpperCase();
// console.log(t1);

// - Перевести до нижнього регістру настипні стрінгові значення
// let f ='HELLO WORLD';
// let f1 = f.toLowerCase();
// console.log(f1);
// let w ='LOREM IPSUM';
// let w1 = w.toLowerCase();
// console.log(w1);
// let x = 'JAVASCRIPT IS COOL';
// let x1 = x.toLowerCase();
// console.log(x1);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let ohne = str.trim();
// console.log(ohne);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let x = [10,8,-7,55,987,-1011,0,1050,0];
// let w = x.map((num1) => num1 + '');
// console.log(w);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];//
// let x = [10,8,-7,55,987,-1011,0,1050,0];
// let y = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a,b) => a - b);
//     }else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
// console.log(y(x, 'ascending'));
// console.log(y(x, 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((m1, m2) => {
// if (m1.monthDuration > m2.monthDuration) {
//     return -1
// }else {
//     return 0
// }
// });
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(duration => duration.monthDuration > 5);
// console.log(filter);

// описати колоду карт
let decks = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'}
];
// - знайти піковий туз
// let clubsAce = decks.filter((deck) => deck.cardSuit === 'clubs' && deck.value === 'ace');
// console.log(clubsAce);
// - всі буби
let diamond = decks.filter((deck) => deck.cardSuit === 'diamond');
console.log(diamond);
// - всі шістки
let six = decks.filter((deck) => deck.value === '6');
console.log(six);
// - всі червоні карти
let red = decks.filter((deck) => deck.color === 'red');
console.log(red);
// - всі трефи від 9 та більше
let spade = decks.filter((deck) => deck.value > '8' && deck.cardSuit === 'spade' || deck.value === '10' && deck.cardSuit === 'spade');
console.log(spade);
// {
    // cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    //     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    // color:'', // 'red','black'
// }





