import Clock from './service/clock.js';
import DomConstructor from './service/handleDom.js';
import Queote from './service/queote.js';
import User from './service/User.js';
import Weather from './service/weather.js';

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
let init = true;

const updateScreen = (li) => {
    const updatedUI = document.createElement('ul');
    updatedUI.className = 'new-todos';
    updatedUI.appendChild(li);
    todoFormContainer.appendChild(updatedUI);
}

const handelDelete = async (buttonElement) => {
    buttonElement.addEventListener('click', (event) => {
        init = false;
        const updated = user.getTodos().filter(item => {
            return item['id'] !== parseInt(event.target.parentNode.dataset.id);
        })
        user.setTodos(updated).then(() => {
            new User();
            renderTodos(user.getTodos())
        });
        ulElement.removeChild(buttonElement.parentNode);
    })
}

const renderTodos = (todos) => {
    if (!todos) {
        return;
    }
    todos.map(item => {
        const { todo, id } = item;
        const todoElemnt = domConstructor.createToDoElement(todo, id);
        if (init) {
            ulElement.appendChild(todoElemnt);
        }
        handelDelete(todoElemnt.lastElementChild);
    })
}

const renderTodo = (todos) => {
    init = true;
    if (!todos) {
        return;
    }
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
    const weather = new Weather();
    weather.renderWeather();
    new Queote().getRandomQueote();
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
    new User().setTodo(todo);
    renderTodo(todo);
}



nameForm.addEventListener('submit', handleNameSubmit);
todoForm.addEventListener('submit', handleTodoSubmit);