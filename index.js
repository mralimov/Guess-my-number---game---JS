'use strict';

//Random numbers
let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//Refactored Message dispalys
const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Main game logic and structure
const btnCheck = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const inputNum = Number(document.querySelector('.guess').value);

    //No number message
    if (!inputNum) {
      showMessage('⛔️ No number!');
    }
    //Winning the game
    else if (inputNum === randomNumber) {
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = '#18cf3f';
      document.querySelector('.number').style.width = '30rem';
      showMessage('🎉 Correct Number!');

      //Setting Score to HighScore
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }

    //If numbers don't match logic with message
    else if (inputNum != randomNumber) {
      if (score > 1) {
        showMessage(inputNum > randomNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        showMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

//AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;

  score = 20;
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#2104c9';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
