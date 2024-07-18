// JavaScript
let minutes = 0;
let seconds = 0;
let intervalId = null;
let timerStarted = false;

document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);
document
  .getElementById("1-minute-button")
  .addEventListener("click", setTimerTo1Minute);
document
  .getElementById("2-minute-button")
  .addEventListener("click", setTimerTo2Minutes);
document
  .getElementById("5-minute-button")
  .addEventListener("click", setTimerTo5Minutes);

function startTimer() {
  if (!timerStarted) {
    let customMinutes = parseInt(
      document.getElementById("custom-minutes").value
    );
    let customSeconds = parseInt(
      document.getElementById("custom-seconds").value
    );

    if (!isNaN(customMinutes) && !isNaN(customSeconds)) {
      minutes = customMinutes;
      seconds = customSeconds;
    }

    intervalId = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        alert("Time's up!");
        clearInterval(intervalId);
        timerStarted = false;
      }
      document.getElementById("minutes").textContent = minutes
        .toString()
        .padStart(2, "0");
      document.getElementById("seconds").textContent = seconds
        .toString()
        .padStart(2, "0");
    }, 1000);
    timerStarted = true;
  }
}

function stopTimer() {
  clearInterval(intervalId);
  timerStarted = false;
}

// function resetTimer() {
//   minutes = 0;
//   seconds = 0;
//   document.getElementById("minutes").textContent = "00";
//   document.getElementById("seconds").textContent = "00";
//   timerStarted = false;
// }

function resetTimer() {
  minutes = 0;
  seconds = 0;
  document.getElementById("minutes").textContent = "00";
  document.getElementById(" seconds").textContent = "00";
  timerStarted = false;
  clearInterval(intervalId); // Clear the interval before resetting
}

function setTimerTo1Minute() {
  minutes = 1;
  seconds = 0;
  document.getElementById("minutes").textContent = "01";
  document.getElementById("seconds").textContent = "00";
  startTimer();
}

function setTimerTo2Minutes() {
  minutes = 2;
  seconds = 0;
  document.getElementById("minutes").textContent = "02";
  document.getElementById("seconds").textContent = "00";
  startTimer();
}

function setTimerTo5Minutes() {
  minutes = 5;
  seconds = 0;
  document.getElementById("minutes").textContent = "05";
  document.getElementById("seconds").textContent = "00";
  startTimer();
}
