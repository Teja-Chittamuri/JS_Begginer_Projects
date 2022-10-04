'use strict';

// Selectong elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnDiceRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');

//  starting conditions or intialization
let currentScore, scores, activePlayer, playing;

const init = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceEL.classList.add('hidden');
};
init();

// Switch palyer functionality

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// dice functionality

btnDiceRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random num b/w 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    // console.log(dice);
    // 3.Chek for rolled num 1 :> if it is true , switch to next player

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // firstPlayerCurrentScore.textContent = CurrentScore;
    } else {
      // dice ===1 // Switch to next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // activePlayer = activePlayer == 0 ? 1 : 0;
      // currentScore = 0;
      // player0.classList.toggle('player--active');
      // player1.classList.toggle('player--active');

      switchPlayer();
    }
  }
});

// Hold button functionality

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score of the active player's to the score board

    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.check if the player's score is =100

    if (scores[activePlayer] >= 100) {
      //3. if so  player's wins the  game
      // playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.querySelector(`.player--${activePlayer}`).classList.add('name');
      diceEL.classList.add('hidden');
    } else {
      //4.switch to the next player
      switchPlayer();
    }
  }
});

// New Game button functionality

btnNewGame.addEventListener('click', init); // Here we calling the "init" function which conatins the reset funcationality

// let value1 = 10;
// let value2 = 30;
// let sum = value1 + value2;
// console.log(`sum of two values is ${sum}`);
