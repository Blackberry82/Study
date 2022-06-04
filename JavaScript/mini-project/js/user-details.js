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
fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            for (const user of users) {
                const {id, name, username, email, address, phone, website, company} = user;
                button.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(value => value.json())
                        .then(posts => {
                                // const postDiv = document.createElement('div');
                                // postDiv.setAttribute('class', 'post');
                                // document.body.append(postDiv);
                                for (const post of posts) {
                                    // const {userId, id, title, body} = post;
                                    // if (user.id === post.userId) {
                                        const postDiv = document.createElement('div');
                                        postDiv.innerHTML = `<h3>${user.id} - ${post.title}</h3>`
                                        document.body.append(postDiv);
                                        const anchor = document.createElement('a');
                                        anchor.setAttribute('href','http://localhost:63342/simpsons/JavaScript/mini-project/html/post-details.html')
                                        const btn = document.createElement('button');
                                        btn.innerText = 'POST';
                                        anchor.append(btn);
                                        postDiv.append(anchor);
                                    // }
                                }
                        })
                }
            }
        })






