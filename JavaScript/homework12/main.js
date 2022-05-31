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

fetch('https://jsonplaceholder.typicode.com/comments')
.then(responce => responce.json())
.then(comments => {
    comments.forEach(comment =>{
        const blockDiv = document.createElement('div');
        blockDiv.setAttribute('class', 'comment');
        const postID = document.createElement('p');
        postID.innerText = `postId: ${comment.postId}`;
        const ID = document.createElement('p');
        ID.innerText = `id: ${comment.id}`;
        const  name = document.createElement('h3');
        name.innerText = `${comment.name}`;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.innerText = `${comment.email} ${comment.body}`;
        ul.appendChild(li);
        blockDiv.append(postID, ID, name, ul);
        document.body.appendChild(blockDiv);
    })
})