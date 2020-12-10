'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

let score = 20;
let highScore = 0;

// const message = document.querySelector('.message');
const btnCheck = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const inputNum = Number(document.querySelector('.guess').value);
    console.log(inputNum);
    if (!inputNum) {
      //   document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (inputNum === randomNumber) {
      document.querySelector('body').style.backgroundColor = '#18cf3f';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      highScore++;
      document.querySelector('.highscore').textContent = highScore;
    } else if (inputNum > randomNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (inputNum < randomNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  });

//🎉 Correct Number!
//📈 Too high!
//💥 You lost the game!
//📉 Too low!
//⛔️ No number!
