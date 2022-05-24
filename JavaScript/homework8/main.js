//
// // - Напишіть код,  котрий :
// // -- отримує текст з параграфа з id "content"
// const par = document.getElementById('content');
// console.log(par.innerText);
//
//
// // -- отримує текст з блоку з id "rules"
// const block = document.getElementById('rules');
// console.log(block.innerText);

//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// par.innerText = 'hello my love';
//
// const graf = document.getElementsByTagName('p');
// console.log(graf);
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// block.innerText = 'How are you doing?';
// block.innerHTML = '<h1>Hello! Hello!</h1>';
//
// // -- змініть кожному елементу колір фону на червоний
// par.style.background = 'yellow';
// block.style.backgroundColor = 'pink';
// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'red';
// }
// //
// // -- змініть кожному елементу колір тексту на синій
// par.style.color = 'blue';
// block.style.color = 'blue';
// let items = document.querySelectorAll('*');
// for (const item of items) {
//     item.style.color = 'blue'
// }
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// const all = document.getElementById('rules');
// const x = all.classList;
// console.log(x);

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const rules = document.getElementsByClassName('fc_rules');
// for (const rule of rules) {
//     rule.style.color = 'red';
// }
// console.log(document.getElementsByTagName('li'));

// Взяти файл teplate_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// const mainHeader = document.getElementById('main_header');
// const nameOfGroup = mainHeader.classList.add('march-2022');
// mainHeader.className = 'Hello';
// mainHeader.setAttribute('class', 'hy');

// b) робить шириниу елементу ul 400px
// const widths = document.getElementsByTagName('ul');
// console.log(widths);
// for (const width of widths) {
//     width.style.width = '400px';
// }
// const widths = document.getElementsByTagName('ul')[0];
// widths.style.width = '600px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const  LinkLists = document.getElementsByClassName('linkList')
// console.log(LinkLists);
// for (const LinkList of LinkLists) {
//     LinkList.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// const getMeText = document.getElementsByClassName('listElement2');
// for (const TextElement of getMeText) {
//     console.log(TextElement.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// const allLists = document.getElementsByTagName('li');
// for (allList of allLists) {
//     allList.style.background = 'grey';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const pops = document.getElementsByTagName('a');
// for (const pop of pops) {
//     const anc = pop.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (const pop of pops) {
//     if (pop.innerText === 'link3') {
//         pop.style.fontSize = '40px';
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const pop of pops) {
//     pop.className = `element_${pop.innerText}`;
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subs = document.getElementsByClassName('sub-header');
// const color = prompt('guess the color');
//     for (const sub of subs) {
//         sub.style.background = color;
//     }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const col = prompt('get me color?');
// for (const sub of subs) {
//     if (sub.innerText === 'content 2 segment') {
//       sub.style.color = col;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const cons1 = document.getElementsByClassName('content_1');
// const text = prompt('say me samething!!!');
// for (const con of cons1) {
//     con.innerText = text;
// }

// l) отримати елементи p та змінити їм padding на 20px
// const  allppps = document.getElementsByTagName('p');
// for (allppp of allppps) {
//     allppp.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const groups = document.getElementsByClassName('text2');
// for (const group of groups) {
//     group.innerText = 'march 2022';
// }
// function foo(start) {
//     console.log(start);
//     let children = start.children;
//     for (const child of children) {
//         foo(child);
//     }
// }
//
// foo(document.body);
const array = [1,2,3,[23,[1,2,3,4],[56,78,90,[12,34,456,78,[100,200,300]]],[1,2,3,4]],[45,56,687,89]];
function x(arr) {
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const children = arr[i];
        // console.log(children);
        for (let j = 0; j < children.length; j++) {
            const child = children[j];
            // console.log(child);
            for (let k = 0; k < child.length; k++) {
                const childElement = child[k];
                // console.log(childElement);
                for (let l = 0; l < childElement.length; l++) {
                    const item = childElement[l];
                    // console.log(item);
                    for (let m = 0; m < item.length; m++) {
                        const itemElement = item[m];
                        console.log(itemElement);
                        x(arr.length);
                    }
                }
            }
        }
        }
}
x(array);