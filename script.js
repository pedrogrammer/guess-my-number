'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess)
        document.querySelector('.message').textContent = '⚠️ No number!';
    // When a player wins
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }
    }
    // When a guess is too high
    else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '☹️ You lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
    // When a guess is too low
    else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '☹️ You lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});