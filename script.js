'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20; 

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// always use + 1 because when we don't use + 1 we just get the number between 1 and 19.99999
let score = 20; //storing value whenever the number is correct could be increase or decrease it depending on which is true or false
let highscore = 0; // starting from 0 until reassign with the new score Number
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const colorDisplay = function(color) {
    document.querySelector('body').style.backgroundColor = color;
}

const widthDisplay = function(width) {
    document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); // will log the value whenever the button is clicked
    console.log(guess, typeof guess);
    // When there is no Input number
    if (!guess) {
        // document.querySelector('.message').textContent = '🤷‍♀️ No Number!';
        displayMessage('🤷‍♀️ No Number!');
    } else if (guess === secretNumber) { // when player is wins
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!')
        score++;
        document.querySelector('.score').textContent = score; // changing the current score value
        document.querySelector('.number').textContent = secretNumber;
        // change the background color of the element => body
        // document.querySelector('body').style.backgroundColor = '#60b347';
        colorDisplay('#60b347');
        // change the width of the number class element => 30px
        // document.querySelector('.number').style.width = '30rem';
        widthDisplay('30rem');
        // highscore logic 
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // when the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '🚀 Too High!' : '🎢 Too Low!';
            displayMessage(guess > secretNumber ? '🚀 Too High!' : '🎢 Too Low!');
            score--;
            document.querySelector('.score').textContent = score; // changing the current score value
        } else {
            // document.querySelector('.message').textContent = '💥 You lose the game!';
            displayMessage('💥 You lose the game!'); 
            document.querySelector('.score').textContent = 0;
        }
    }  
        /** Always keeep DRY
         *  Do not repeat yourself
         *  always write readable code
         *  instead of repeating code use function so it would be more reusable 
         */
    // else if (guess > secretNumber) { // when the number is too high
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🚀 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score; // changing the current score value
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lose the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess < secretNumber) { // when the number us less than the secret number
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🎢 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score; // changing the current score value
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lose the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
}); // the function will be called when the events is triggered



/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // change the message
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    // change the score
    document.querySelector('.score').textContent = score;
    // change the number sign 
    document.querySelector('.number').textContent = '?';
    // change the guesss input
    document.querySelector('.guess').value = ''; // the empty string basically just absence of any value so you can assign it as well
    // change the background color 
    // document.querySelector('body').style.backgroundColor = '#222';
    colorDisplay('#222');
    // change the number width 
    // document.querySelector('.number').style.width = '15rem';
    widthDisplay('15rem');
});