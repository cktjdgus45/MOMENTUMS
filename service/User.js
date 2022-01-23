export default class User {
    todos;
    userName;
    constructor() {
        this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
        // console.log(this.todos)
    }
    setName(userName) {
        localStorage.setItem('name', userName);
    }
    getName() {
        this.userName = localStorage.getItem('name');
        return this.userName;
    }
    isLogin() {
        if (this.getName()) {
            return this.getName();
        } else {
            return false;
        }
    }
    setTodo(todoValue) {
        const todo = {
            id: this.todos.length,
            todo: todoValue
        };
        console.log(this.todos);
        this.todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(this.todos));

    }

    setTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return new Promise((resolve, reject) => {
            resolve('localstorage store Success!');
        });
    }

    getTodos() {
        const todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    }
}