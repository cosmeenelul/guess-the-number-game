'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const nrGhicit = Number(document.querySelector('.guess').value);
  console.log(nrGhicit, typeof nrGhicit);

  if (!nrGhicit) {
    document.querySelector('.message').textContent = `No number!❌`;

    // Correct guess
  } else if (nrGhicit === secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct number!`;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (nrGhicit > secretNumber) {
    // Too high
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Too High`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🥲 You lost the game!`;
    }
  } else if (nrGhicit < secretNumber) {
    //Too low
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Too Low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🥲 You lost the game!`;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
