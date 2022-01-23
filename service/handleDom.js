export default class DomConstructor {
    createLiElement() {
        const li = document.createElement('li');
        return li;
    }
    createSpanElement(content) {
        const span = document.createElement('span');
        content ? span.innerText = content : null;
        return span;
    }
    createButtonElement(content) {
        const button = document.createElement('button');
        content ? button.innerText = content : null;
        return button;
    }

    createToDoElement(todo, id) {
        const span = this.createSpanElement(todo);
        const li = this.createLiElement();
        li.dataset.id = id;
        const button = this.createButtonElement('x');
        li.appendChild(span);
        li.appendChild(button);
        return li;
    }
}