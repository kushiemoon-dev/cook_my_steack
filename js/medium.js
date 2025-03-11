const startMins = 2.5;
let time = startMins * 60;
let timerInterval;

const timer = document.getElementById('timer');
const startButton = document.getElementById('medium');
const sound = new Audio('../assets/bip-sound.mp3');
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
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            sound.play();
            message.innerHTML = "Time to eat !";
        }
    }, 1000);
});

