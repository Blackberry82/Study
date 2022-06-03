fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users => {
    const mainDiv = document.getElementById('container');
    for (const user of users) {
        const oneDiv = document.createElement('div');
        oneDiv.setAttribute('class', 'user');
        oneDiv.innerHTML = `<h3>id: ${user.id}</h3>
                            <h2>${user.name}</h2>`;
        mainDiv.appendChild(oneDiv);
        const ancor = document.createElement('a');
        ancor.setAttribute('href', 'user-details.html');
        const button = document.createElement('button');
        button.innerText = 'Info';
        ancor.appendChild(button);
        oneDiv.appendChild(ancor);
        button.onclick = () => {
            const Key = 'Key';
            localStorage.setItem(Key, JSON.stringify(user));

        }
    }
})