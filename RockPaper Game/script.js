/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
"use strict";

// Global access to all id's
const rpsBtns = document.querySelectorAll(".rpsButton");
const playerScore = document.getElementById("player-score");
const result = document.getElementById("result");
const hands = document.getElementById("hands");
const gameEndBtn = document.getElementById("endGameButton");
const scoreBoard = document.getElementById("score-board");
const totalScores = { playerScore: 0, computerScore: 0 };
let playerTotal;
let computerTotal;

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  const gameChoices = ["Rock", "Paper", "Scissor"];
  let randomPick = Math.floor(Math.random() * 3);
  return gameChoices[randomPick];
}
function getResult(playerChoice, computerChoice) {
  let score = 0;
  if (playerChoice === computerChoice) {
    score = 0;
  }
  //Human Wins
  else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  }
  // Computer Wins
  else {
    score = -1;
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  if (score === 0) {
    result.textContent = "Game is Draw";
  } else if (score === 1) {
    result.innerText = "You Win🏆";
  } else if (score === -1) {
    result.innerText = "You Lose!";
  }
  playerScore.textContent = playerTotal;
  scoreBoard.innerText = `🧔🏻‍♂️Score ${playerTotal} vs 🤖Score ${computerTotal}`;
  hands.innerText = `🧔🏻‍♂️ ${playerChoice}  vs 🤖  ${computerChoice}`;
}
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  playerTotal = totalScores["playerScore"] += score;
  computerTotal = totalScores["computerScore"] -= score;
  showResult(score, playerChoice, computerChoice);
}
function playGame() {
  // Adding Event listener to all the buttons manually

  // rpsBtns[0].onclick = () =>(rpsBtns[0].value);
  // rpsBtns[1].onclick = () =>rpsBtns[1].value);
  // rpsBtns[2].onclick = () =>(rpsBtns[2].value);

  // Using Foreach loop adding event listener to all 3 btns
  rpsBtns.forEach((rpsbtn) => {
    rpsbtn.onclick = () => {
      onClickRPS(rpsbtn.value);
    };
  });
}
playGame();
// ** endGame function clears all the text on the DOM **
function endGame() {
  gameEndBtn.onclick = () => {
    playerScore.innerText = "";
    result.innerText = "";
    hands.innerText = "";
    totalScores["playerScore"] = 0;
    totalScores["computerScore"] = 0;
  };
}
endGame();
