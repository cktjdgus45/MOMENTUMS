import Clock from './service/clock.js';
import DomConstructor from './service/handleDom.js';
import User from './service/User.js';

const nameInput = document.querySelector('.center-name-input');
const todoInput = document.querySelector('.center-todo-input');
const nameForm = document.querySelector('.center-name-form');
const todoForm = document.querySelector('.center-todo-form');
const nameFormContainer = document.querySelector('.center-nameForm-container');
const todoFormContainer = document.querySelector('.center-todoForm-container');
const userNameElement = document.querySelector('.userName');
const ulElement = document.querySelector('.todos');

const user = new User();
const domConstructor = new DomConstructor();
const clock = new Clock();


const handelDelete = async (buttonElement) => {
    buttonElement.addEventListener('click', (event) => {
        const updated = user.getTodos().filter(item => {
            return item['id'] !== parseInt(event.target.parentNode.dataset.id);
        })
        user.setTodos(updated).then(() => renderTodos(user.getTodos()));
    })
}

const renderTodos = (todos) => {
    todos.map(item => {
        const { todo, id } = item;
        const todoElemnt = domConstructor.createToDoElement(todo, id);
        handelDelete(todoElemnt.lastElementChild)
        ulElement.appendChild(todoElemnt);
    })
}

const renderTodo = (todos) => {
    const todo = domConstructor.createToDoElement(todos);
    ulElement.appendChild(todo);
    return;
}

const handleFormDisplay = () => {
    todoFormContainer.classList.replace('hide', 'show');
    nameFormContainer.classList.replace('show', 'hide');
}

if (user.isLogin()) {
    handleFormDisplay();
    userNameElement.innerText = user.getName();
    renderTodos(user.getTodos());
    clock.display();
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
    renderTodo(todo);
}



nameForm.addEventListener('submit', handleNameSubmit);
todoForm.addEventListener('submit', handleTodoSubmit);