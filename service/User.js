export default class User {
    todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    userName;
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
        this.todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    getTodo() {
        const todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    }
}