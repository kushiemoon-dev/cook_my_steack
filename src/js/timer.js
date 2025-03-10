const startMins = 1;
let time = startMins * 60;
let timerInterval;

const timer = document.getElementById('rare-cooked');
const startButton = document.getElementById('rare');

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
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
});

