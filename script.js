'use strict';

const
    displayMessage = message => document.querySelector('.message').textContent = message,
    bodyBackgroundColor = color => document.querySelector('body').style.backgroundColor = color,
    secretNumberContainerWidth = width => document.querySelector('.secret-number').style.width = width,
    secretNumberValue = () => Math.trunc(Math.random() * 20) + 1,
    displaySecretNumber = secretNumber => document.querySelector('.secret-number').textContent = secretNumber,
    displayScore = score => document.querySelector('.score').textContent = score,
    guessValue = guess => document.querySelector('.guess').value = guess
;

let 
    secretNumber = secretNumberValue(),
    score = 20,
    highScore = 0
;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess)
        displayMessage('⚠️ No number!');
    // When a player wins
    else if(guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        bodyBackgroundColor('#60b347');
        secretNumberContainerWidth('30rem');
        displaySecretNumber(secretNumber);

        if(score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }
    }
    // When a guess is wrong
    else if(guess !== secretNumber) {
        if(score > 1) {
            if(score > 1) {
                displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
                score--;
                displayScore(score);
            } else {
                displayMessage('☹️ You lost!');
                displayScore(0);
            }    
        } else {
            displayMessage('☹️ You lost!');
            displayScore(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = secretNumberValue();

    guessValue('');
    displaySecretNumber('?');
    displayMessage('Start guessing ...');
    displayScore(score);
    bodyBackgroundColor('#222');
    secretNumberContainerWidth('15rem');
});