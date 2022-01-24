export default class Random {
    getRandomQueote() {
        const queote = document.querySelector('.queote-content');
        fetch('https://api.adviceslip.com/advice', {
            method: 'GET'
        }) //
            .then(response => response.json())
            .then(data => queote.innerHTML = data.slip.advice);
    }
    getRandomImage() {
        const app = document.querySelector('.app');
        console.dir(app)
        fetch(' https://picsum.photos/200/300', {
            method: 'GET'
        })
            .then(response => app.style.background = `url(${response.url}) no-repeat center`);

    }
}