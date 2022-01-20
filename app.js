const nameInput = document.querySelector('.center-input');
const centerForm = document.querySelector('.center-form');
const nameFormContainer = document.querySelector('.center-nameForm-container');
const todoFormContainer = document.querySelector('.center-todoForm-container');
const userName = document.querySelector('.userName');

const localStorage = window.localStorage;

if (localStorage.getItem('name')) {
    todoFormContainer.classList.replace('hide', 'show');
    nameFormContainer.classList.replace('show', 'hide');
    userName.innerText = `${localStorage.getItem('name')}`;
}


const handleSubmit = (event) => {
    event.preventDefault();
    const user = nameInput.value;
    localStorage.setItem('name', user);
    nameInput.value = "";
    // console.log(localStorage.getItem('name'))
    nameFormContainer.classList.replace('show', 'hide');
    todoFormContainer.classList.replace('hide', 'show');
    userName.innerText = `${localStorage.getItem('name')}`;
}

centerForm.addEventListener('submit', handleSubmit);