//
// // - Напишіть код,  котрий :
// // -- отримує текст з параграфа з id "content"
// const par = document.getElementById('content');
// console.log(par);
//
//
// // -- отримує текст з блоку з id "rules"
// const block = document.getElementById('rules');
// console.log(block);
// console.log(block.children);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// par.innerText = 'hello my love';
//
// const graf = document.getElementsByTagName('p');
// console.log(graf);
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// // block.innerText = 'How are you doing?';
// block.innerHTML = '<h1>Hello! Hello!</h1>';
//
// // -- змініть кожному елементу колір фону на червоний
// par.style.background = 'yellow';
// block.style.backgroundColor = 'pink';
// //
// // -- змініть кожному елементу колір тексту на синій
// par.style.color = 'blue';
// block.style.color = 'blue';
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// const w = document.getElementsByClassName('fc bp');
// console.log(w);
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const rules = document.getElementsByClassName('fc_rules');
// for (const rule of rules) {
//     rule.style.color = 'red';
// }
// console.log(document.getElementsByTagName('li'));

// Взяти файл teplate_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
const mainHeader = document.getElementById('main_header');
console.log(mainHeader);
const nameOfGroup = mainHeader.classList.add('march-2022');
console.log(nameOfGroup);

// b) робить шириниу елементу ul 400px
const widths = document.getElementsByTagName('ul');
console.log(widths);
for (const width of widths) {
    width.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const  LinkLists = document.getElementsByClassName('linkList')
console.log(LinkLists);
for (const LinkList of LinkLists) {
    LinkList.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
const getMeText = document.getElementsByClassName('ListElement2');
console.log(getMeText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
const allLists = document.getElementsByTagName('li');
for (allList of allLists) {
    allList.style.background = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
const pops = document.getElementsByTagName('a');
console.log(pops);
for (const pop of pops) {
    const anc = pop.classList.add('anchor');
    console.log(anc);
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const pop of pops) {
    if (pop.innerText === 'Link3') {
        pop.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const pop of pops) {
    if (pop.innerText === 'link1'){
        pop.classList.add('element_link1');
    } else if (pop.innerText === 'link2') {
        pop.classList.add('element_link2');
    } else if(pop.innerText === 'link3') {
        pop.classList.add('element_link3')
    }
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subs = document.getElementsByClassName('sub-header');
console.log(subs);
// const color = prompt('guess the color');
// for (const sub of subs) {
//     if (color === 'pink') {
//         sub.style.backgroundColor = 'pink'
//     } else {
//         sub.style.backgroundColor = 'green'
//     }
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const col = prompt('get me color?');
// for (const sub of subs) {
//     if (sub.innerText === 'content 2 segment') {
//         if (col === 'red') {
//             sub.style.backgroundColor = 'red';
//         } else {
//             sub.style.backgroundColor = 'yellow'
//         }
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const cons1 = document.getElementsByClassName('content_1');
// console.log(cons1);
// const text = prompt('say me samething!!!');
// for (const con of cons1) {
//     con.innerHTML = `<h2>hi! I am glad see you!!!</h2>`;
// }

// l) отримати елементи p та змінити їм padding на 20px
const  allppps = document.getElementsByTagName('p');
console.log(allppps);
for (allppp of allppps) {
    allppp.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const groups = document.getElementsByClassName('text2');
console.log(groups);
for (const group of groups) {
    group.innerText = 'march 2022';
}
