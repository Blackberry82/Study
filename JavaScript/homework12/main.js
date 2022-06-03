// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             const div = document.createElement('div');
//             div.setAttribute('class', 'post');
//             const userID = document.createElement('p');
//             userID.innerText = `userID: ${post.userId}`;
//             const id = document.createElement('p');
//             id.innerText = `ID: ${post.id}`;
//             const title = document.createElement('h4');
//             title.setAttribute('class', 'title');
//             title.innerText = `${post.title}`;
//             const body = document.createElement('div');
//             body.innerText = `${post.body}`;
//             div.append(userID, id, title, body);
//             document.body.append(div);
//         }
//     });


    // 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(responce => responce.json())
// .then(comments => {
//     comments.forEach(comment =>{
//         const blockDiv = document.createElement('div');
//         blockDiv.setAttribute('class', 'comment');
//         const postID = document.createElement('p');
//         postID.innerText = `postId: ${comment.postId}`;
//         const ID = document.createElement('p');
//         ID.innerText = `id: ${comment.id}`;
//         const  name = document.createElement('h3');
//         name.innerText = `${comment.name}`;
//         const ul = document.createElement('ul');
//         const li = document.createElement('li');
//         li.innerText = `${comment.email}`;
//         const ul2 = document.createElement('ul');
//         const li2 = document.createElement('li');
//         li2.innerText = `${comment.body}`;
//         ul.appendChild(li);
//         ul2.appendChild(li2);
//         blockDiv.append(postID, ID, name, ul, ul2);
//         document.body.appendChild(blockDiv);
//     })
// })

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(value => value.json())
// .then(posts => {
//     for (const post of posts) {
//         const divWrap = document.createElement('div');
//         const {userId, id, title, body} = post;
//         divWrap.innerHTML = `<h2>UseID: ${userId}</h2>
//                         <h2>${id}</h2>
//                         <h2>${title}</h2>
//                         <p>${body}</p>`
//         document.body.append(divWrap);
//     const btn = document.createElement('button');
//     btn.innerText = 'OK';
//     divWrap.append(btn);
//     btn.onclick = () => {
//         fetch('https://jsonplaceholder.typicode.com/comments')
//             .then(value => value.json())
//             .then(comments => {
//                 const div = document.createElement('div');
//                 divWrap.append(div);
//                 for (const comment of comments) {
//                     if (post.id === comment.postId) {
//                         const innerDiv = document.createElement('div');
//                         innerDiv.innerText = comment.postId + ' ' + comment.id + ' ' + comment.name +
//                             ' ' + comment.email + ' ' + comment.body;
//                         div.append(innerDiv);
//                         btn.disabled = true;
//                     }
//
//                 }
//             })
//     }
//     }
// });


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const content = document.createElement('div');

        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.style.marginTop = '10px';

            for (const userKey in user) {
                const innerDiv = document.createElement('div');

                if (typeof user[userKey] !== 'object') {
                    innerDiv.innerText = `${userKey} : ${user[userKey]}`;
                } else {
                    innerDiv.innerText = `${userKey}`;
                    for (const item in user[userKey]) {
                        const itemDiv = document.createElement('div');

                        if (typeof user[userKey][item] !== 'object') {
                            itemDiv.innerText = `${item} : ${user[userKey][item]}`;
                        } else {
                            itemDiv.innerText = `${item}`;

                            for (const itemDivElement in user[userKey][item]) {
                                const itemElement = document.createElement('div');
                                itemElement.innerText = `${itemDivElement} : ${user[userKey][item][itemDivElement]}`;
                                itemDiv.append(itemElement);
                            }
                        }
                        innerDiv.append(itemDiv);
                    }
                }

                userDiv.append(innerDiv);
            }
            const button = document.createElement('button');
            button.innerText = 'Click me';
            content.append(userDiv, button);

            document.body.append(content);
            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(posts => {
                        for (const post of posts) {
                            const divWrap = document.createElement('div');
                            const {userId, id, title, body} = post;
                            divWrap.innerHTML = `<h2>UseID: ${userId}</h2>
                        <h2>${id}</h2>
                        <h2>${title}</h2>
                        <p>${body}</p>`
                            document.body.append(divWrap);
                            const btn = document.createElement('button');
                            btn.innerText = 'OK';
                            divWrap.append(btn);
                            btn.onclick = () => {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(value => value.json())
                                    .then(comments => {
                                        const div = document.createElement('div');
                                        divWrap.append(div);
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {
                                                const innerDiv = document.createElement('div');
                                                innerDiv.innerText = comment.postId + ' ' + comment.id + ' ' + comment.name +
                                                    ' ' + comment.email + ' ' + comment.body;
                                                div.append(innerDiv);
                                                btn.disabled = true;
                                            }

                                        }
                                    })
                            }
                        }
                    })
            }
        }
});
