export default class DomConstructor {
    createLiElement(childElement) {
        const li = document.createElement('li');
        childElement ? li.appendChild(childElement) : null;
        return li;
    }
    createSpanElement(content) {
        const span = document.createElement('span');
        content ? span.innerText = content : null;
        return span;
    }
    createToDoElement(todo) {
        const span = this.createSpanElement(todo);
        const todoElemnt = this.createLiElement(span);
        return todoElemnt;
    }
}