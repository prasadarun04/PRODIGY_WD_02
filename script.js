let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let laps = [];

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("laps").innerHTML = "";
  laps = [];
}

function updateDisplay() {
  let now = Date.now();
  elapsedTime = now - startTime;
  let formattedTime = formatTime(elapsedTime);
  document.getElementById("display").innerText = formattedTime;
}

function formatTime(milliseconds) {
  let date = new Date(milliseconds);
  let hours = date.getUTCHours().toString().padStart(2, "0");
  let minutes = date.getUTCMinutes().toString().padStart(2, "0");
  let seconds = date.getUTCSeconds().toString().padStart(2, "0");
  let millisecondsFormatted = date.getUTCMilliseconds().toString().padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${millisecondsFormatted}`;
}

function lap() {
  if (isRunning) {
    let lapTime = elapsedTime;
    laps.push(lapTime);
    let lapItem = document.createElement("li");
    lapItem.textContent = formatTime(lapTime);
    document.getElementById("laps").appendChild(lapItem);
  }
}
