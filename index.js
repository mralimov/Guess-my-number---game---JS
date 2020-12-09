'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// const message = document.querySelector('.message');
const btnCheck = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const inputNum = Number(document.querySelector('.guess').value);
    console.log(inputNum);
    if (!inputNum) {
      document.querySelector('.message').textContent = '⛔️ No number!';
    } else if (inputNum > randomNumber) {
      document.querySelector('.message').textContent = '📈 Too high!';
    }
  });

//🎉 Correct Number!
//📈 Too high!
//💥 You lost the game!
//📉 Too low!
//⛔️ No number!
