const startMins = 0.10;
let time = startMins * 60;
let timerInterval;

const timer = document.getElementById('timer');
const startButton = document.getElementById('rare');
const sound = new Audio('bip-sound.mp3');
const message = document.getElementById('message');

startButton.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(() => {
        let min = parseInt(time / 60, 10);
        let sec = parseInt(time % 60, 10);

        min = min < 10 ? `0${min}` : min;
        sec = sec < 10 ? `0${sec}` : sec; 
        timer.innerHTML = `${min}:${sec}`;
        timer.classList.add('timer');
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            message.innerHTML = "Time to eat !";
            sound.play();
            message.classList.add('timer');
        }
    }, 1000);
});

