import User from './service/User.js';

const nameInput = document.querySelector('.center-name-input');
const todoInput = document.querySelector('.center-todo-input');
const nameForm = document.querySelector('.center-name-form');
const todoForm = document.querySelector('.center-todo-form');
const nameFormContainer = document.querySelector('.center-nameForm-container');
const todoFormContainer = document.querySelector('.center-todoForm-container');
const userNameElement = document.querySelector('.userName');

const user = new User();

const handleFormDisplay = () => {
    todoFormContainer.classList.replace('hide', 'show');
    nameFormContainer.classList.replace('show', 'hide');
}

if (user.isLogin()) {
    handleFormDisplay();
    userNameElement.innerText = user.getName();
}

const handleNameSubmit = (event) => {
    event.preventDefault();
    const userName = nameInput.value;
    user.setName(userName);
    nameInput.value = "";
    handleFormDisplay();
    userNameElement.innerText = user.getName();
}

const handleTodoSubmit = (event) => {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    user.setTodo(todo);
    user.getTodo();
}

nameForm.addEventListener('submit', handleNameSubmit);
todoForm.addEventListener('submit', handleTodoSubmit);