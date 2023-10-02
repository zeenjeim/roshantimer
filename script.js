let timerInterval;
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let timerValue = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerValue = 0;
    updateTimerDisplay();
    startButton.disabled = false;
}

function updateTimer() {
    timerValue++;
    updateTimerDisplay();
    if (timerValue >= 11 * 60) {
        clearInterval(timerInterval);
        timerDisplay.style.color = 'red';
    } else if (timerValue >= 8 * 60) {
        timerDisplay.style.color = 'red';
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerValue / 60).toString().padStart(2, '0');
    const seconds = (timerValue % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
