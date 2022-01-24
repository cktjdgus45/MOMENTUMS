export default class Weather {
    constructor() {
        this.apiKey = '175f516a65aad231d8b2b5d1abb46438';
    }
    renderWeather() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
            fetch(url, { method: 'GET', })
                .then(response => response.json())
                .then(data => {
                    const location = data.name;
                    const weather = data.weather[0].main;
                    const weatherElement = document.querySelector('.weather');
                    const locationElement = document.querySelector('.location');
                    weatherElement.innerHTML = weather;
                    locationElement.innerHTML = location;
                })
        });
    }
}