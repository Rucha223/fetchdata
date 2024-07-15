async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Network response was not ok');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        document.getElementById('posts-error').innerText = `Error: ${error.message}`;
    }
}

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) throw new Error('Network response was not ok');
        const todos = await response.json();
        displayTodos(todos);
    } catch (error) {
        document.getElementById('todos-error').innerText = `Error: ${error.message}`;
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-content');
    postsContainer.innerHTML = posts.map(post => `
        <div class='post'>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
}

function displayTodos(todos) {
    const todosContainer = document.getElementById('todos-content');
    todosContainer.innerHTML = todos.map(todo => `
        <div class='todo'>
            <h3>${todo.title}</h3>
            <p>${todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
    `).join('');
}

fetchPosts();
fetchTodos();
