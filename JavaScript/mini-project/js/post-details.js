// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)



const posts = JSON.parse(localStorage.getItem('post'));
const mainPostContainer = document.createElement('div');
mainPostContainer.setAttribute('id', 'container');
document.body.append(mainPostContainer);
for (const post in posts) {
    const postContainer = document.createElement('div');
    if (typeof posts[post] !== 'object') {
        postContainer.innerHTML = `${post}: ${posts[post]}`;
    } else {
        postContainer.innerText = `${post}`;
    }
    mainPostContainer.append(postContainer);
}
const mainComment = document.createElement('div')
mainComment.classList.add('box-comment');
document.body.append(mainComment);
fetch(`https://jsonplaceholder.typicode.com/posts/${posts.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            const innerComment = document.createElement('div');
            innerComment.classList.add('comment')
            innerComment.innerHTML = `<p>postId :${comment.postId}</p>
                                        <p>id: ${comment.id}</p>
                                        <h3>${comment.name}</h3>
                                        <p>${comment.email}</p>
                                        <p>${comment.body}</p>`
            mainComment.append(innerComment);
}
    })








