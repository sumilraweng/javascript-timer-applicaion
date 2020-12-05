import { Timer } from "./timer.js";
const timer = new Timer();
// let timeInSec = 0;
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const pauseBtn = document.getElementById("pause");

restartBtn.disabled = true;
pauseBtn.disabled = true;
timer.timerMarkup();
// --------Start-----
const start = () => {
  startBtn.disabled = true;
  restartBtn.disabled = false;
  pauseBtn.disabled = false;
  timer.start();
};

//---pause-------
const pause = () => {
  startBtn.disabled = false;
  restartBtn.disabled = false;
  pauseBtn.disabled = true;
  timer.pause();
  // clearInterval(timer);
};

// -------restart--------
const restart = function () {
  startBtn.disabled = false;
  restartBtn.disabled = true;
  pauseBtn.disabled = true;
  timer.restart();
};

startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", () => {
  restart();
});
pauseBtn.addEventListener("click", () => {
  pause();
});
