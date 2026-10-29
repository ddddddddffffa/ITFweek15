const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todo')) || [];

function saveToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach((todoText, index) => {
        const li = document.createElement('li');
        li.textContent = todoText + ' ';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'ลบ';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        todos.push(text);
        saveToLocalStorage();
        renderTodos();
        todoInput.value = '';
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
}

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

renderTodos();