const nameInput = document.querySelector('.center-input');
const centerForm = document.querySelector('.center-form');

const localStorage = window.localStorage;

const handleSubmit = (event) => {
    event.preventDefault();
    const username = nameInput.value;
    localStorage.setItem('name', username);
    nameInput.value = "";
    console.log(localStorage.getItem('name'))
}

centerForm.addEventListener('submit', handleSubmit);