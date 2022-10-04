'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number✌️';

// console.log(document.querySelector('.label-score').textContent);
// document.querySelector('.label-score').textContent = '💯  Score : 19';

// document.querySelector('.number').textContent = 14;
// document.querySelector('.label-highscore').textContent = '🥇 Top Score : 20';

/// To manipulate the input field  we need to use value
console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 10;

// ____________________________Game logic to generate random numbers between 1 to 20___________________________

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// function for MSG functionality
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Function for Score functionallity
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// Function for Num functionality
let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// clickable action on the button using addeventlistener

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  /// outputs are based on this if-else loop

  // when there is no input

  if (!guess) {
    displayMessage('No number👎');

    // when player wins the game
  } else if (guess === secretNumber) {
    displayMessage('🎆Correct number');
    displayNumber = secretNumber;
    document.querySelector('h1').textContent = 'Own the Game!🏆🎆';
    document.querySelector('body').style.backgroundColor = '#f76707';
    document.querySelector('.number').style.width = '40rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Refactored the code using Ternirary operator
  // when the player guess != secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⚡ Too High' : '🔅 Too Low'; // used a terinary
      score--;
      displayScore(score);
    } else {
      displayMessage('👎You lost the game!');
      displayScore(0);
    }
  }
  // Again button functionalities which reset all the feilds

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayScore(score);
    displayNumber = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('h1').textContent = 'Guess My number!';
    displayMessage('Start guessing...');
  });

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⚡ Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when the player inout is < secret number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🔅 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
