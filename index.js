const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    bodyEl: document.querySelector('body'),
    startBtn: document.querySelector('.start'),
    stopBtn: document.querySelector('.stop')
 }

refs.startBtn.addEventListener('click', startRandom);
refs.stopBtn.addEventListener('click', stopRandom);

let intervalId = null;

function startRandom(e) {
    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length);
        refs.bodyEl.style.backgroundColor = colors[randomColor];
    }, DELAY);
    e.target.setAttribute("disabled", "");
};

function stopRandom() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute("disabled");
};

