// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.



const users = JSON.parse(localStorage.getItem('Key'));
const content = document.getElementById('wrap');
for (const user in users) {
    const outDiv = document.createElement('div');
    const userDiv = document.createElement('div');
    if (typeof users[user] !=='object') {
        userDiv.innerText = `${user} : ${users[user]}`;
    } else {
        userDiv.innerText = `${user}`;
        for (const item in users[user]) {
                const itemDiv = document.createElement('div');
                        if (typeof users[user][item] !== 'object') {
                            itemDiv.innerText = `${item} : ${users[user][item]}`;
                        } else {
                            itemDiv.innerText = `${item}`;
                            for (const Element in users[user][item]) {
                                const innerDiv = document.createElement('div');
                                innerDiv.innerText = `${Element} : ${users[user][item][Element]}`;
                               itemDiv.append(innerDiv);
                            }
                        }
                            userDiv.append(itemDiv);
         }
    }
    outDiv.append(userDiv);
    content.append(outDiv);
}
const button = document.createElement('button');
button.setAttribute('class', 'btn');
button.innerText = 'post of current user';
document.body.append(button);
const outPostDiv = document.createElement('div');
outPostDiv.setAttribute('class', 'post');
document.body.append(outPostDiv);
button.addEventListener('click', () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                const postDiv = document.createElement('div');
                postDiv.classList.add('title');
                outPostDiv.append(postDiv);
                    postDiv.innerHTML = `<h4>${post.title}</h4>`;
                    button.disabled = true;
                    const anchor =document.createElement('a');
                    anchor.setAttribute('href', 'post-details.html');
                    const btn = document.createElement('button');
                    btn.classList.add('button');
                    btn.innerText = 'POST';
                    anchor.append(btn);
                    postDiv.append(anchor);
                    btn.onclick = () => {
                        const Key = 'post';
                        localStorage.setItem(Key, JSON.stringify(post));
                        console.log(JSON.parse(localStorage.getItem(Key)));
                    }

            }
        })
})









