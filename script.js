const homeScoreCard = document.getElementById("home-scorecard");
const guestScoreCard = document.getElementById("guest-scorecard");
const timer = document.getElementById("timer");

let totalHomeScore = 0;
let totalGuestScore = 0;

function hAddone() {
  totalHomeScore = totalHomeScore + 1;
  homeScoreCard.innerText = totalHomeScore;
  checkWinner();
}
function hAddtwo() {
  totalHomeScore = totalHomeScore + 2;
  homeScoreCard.innerText = totalHomeScore;
  checkWinner();
}
function hAddthree() {
  totalHomeScore = totalHomeScore + 3;
  homeScoreCard.innerText = totalHomeScore;
  checkWinner();
}
function gAddone() {
  totalGuestScore = totalGuestScore + 1;
  guestScoreCard.innerText = totalGuestScore;
  checkWinner();
}
function gAddtwo() {
  totalGuestScore = totalGuestScore + 2;
  guestScoreCard.innerText = totalGuestScore;
  checkWinner();
}
function gAddthree() {
  totalGuestScore = totalGuestScore + 3;
  guestScoreCard.innerText = totalGuestScore;
  checkWinner();
}
const winnertext = document.getElementById("winnertext");
const homeWinner = document.getElementById("home");
const guestWinner = document.getElementById("guest");
function checkWinner() {
  if (totalGuestScore > totalHomeScore) {
    winnertext.innerText = "Guest time is winning!";
    guestWinner.classList.add("winning");
    homeWinner.classList.remove("winning");
  } else if (totalHomeScore > totalGuestScore) {
    winnertext.innerText = "Home team is winning!";
    homeWinner.classList.add("winning");
    guestWinner.classList.remove("winning");
  } else {
    winnertext.innerText = "It is a tie!";
    homeWinner.classList.remove("winning");
    guestWinner.classList.remove("winning");
  }
}
function resetScore() {
  homeScoreCard.innerText = 0;
  guestScoreCard.innerText = 0;
  totalHomeScore = 0;
  totalGuestScore = 0;
  winnertext.innerText = "Let the Game Begain!";
  homeWinner.classList.remove("winning");
  guestWinner.classList.remove("winning");
  stopTimer();
}

function convertToTimeFormat(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

const seconds = 30;
let timeFormat = convertToTimeFormat(seconds);
let timerReset;

function secondClock() {
  let second = seconds;
  timerReset = setInterval(() => {
    if (second <= 0 || second < 1) {
      timer.innerHTML = "Time Out";
      clearInterval(timerReset);
    } else {
      second--;
      second = second < 10 ? "0" + second : second;
      timer.innerText = `00:${second}`;
    }
  }, 1000);
}

function startTimer() {
  secondClock();
}
function stopTimer() {
  clearInterval(timerReset);
  timer.innerText = `${timeFormat}`;
}
