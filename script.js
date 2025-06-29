'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const nrGhicit = Number(document.querySelector('.guess').value);
  console.log(nrGhicit, typeof nrGhicit);

  if (!nrGhicit) {
    document.querySelector('.message').textContent = `No number!❌`;
  } else if (nrGhicit == secretNumber) {
    document.querySelector('.message').textContent = `🎉 Correct number!`;
  }
});
