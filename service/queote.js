export default class Queote {
    getRandomQueote() {
        const queote = document.querySelector('.queote-content');
        fetch('https://api.adviceslip.com/advice', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => queote.innerHTML = data.slip.advice);

    }
}