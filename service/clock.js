export default class Clock {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();

    setTimes() {
        setInterval(() => {
            this.seconds++;
            if (this.seconds === 60) {
                this.minutes++;
                this.seconds = 0;
            }
            if (this.minutes === 60) {
                this.hours++;
                this.minutes = 0;
            }
            if (this.hours === 24) {
                this.hours = 0;
            }
        }, 1000);
    }

    display() {
        this.setTimes();
        const hours = document.querySelector('.hours');
        const minutes = document.querySelector('.minutes');
        const seconds = document.querySelector('.seconds');
        setInterval(() => {
            hours.innerHTML = `${this.hours < 10 ? `0${this.hours}` : this.hours}`;
            minutes.innerHTML = `${this.minutes < 10 ? `0${this.minutes}` : this.minutes}`;
            seconds.innerHTML = `${this.seconds < 10 ? `0${this.seconds}` : this.seconds}`;
        }, 1000)
    }
}