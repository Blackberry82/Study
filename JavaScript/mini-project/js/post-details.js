fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(posts => {
        const mainDiv = document.createElement('div');
        mainDiv.setAttribute('class', 'wrap');
        document.body.append(mainDiv);

        for (const post of posts) {
            const innerDiv = document.createElement('div');
            innerDiv.setAttribute('class', 'inner');
            innerDiv.innerHTML = `<p>userId : ${post.userId}</p>
                                   <p>id : ${post.id}</p>
                                    <h3>${post.title}</h3>
                                     <p>${post.body}</p>`;
            mainDiv.append(innerDiv);
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(value => value.json())
                .then(comments => {
                    const comment = document.createElement('div');
                    document.body.append(comment);
                    for (const comment of comments) {

                    }
                })
        }
    });