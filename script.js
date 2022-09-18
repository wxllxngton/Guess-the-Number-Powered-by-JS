'use strict';

/*
// Prints text part of the element
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 18;

// Get value in the textboxs add `.value`
document.querySelector('.guess').value = 13;

console.log(document.querySelector('.guess').value);

*/

// Random number betweeen 1 - 20
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.score').textContent = score;
/* Catch a glimpse of the secret number
// document.querySelector('.number').textContent = secretNumber;
*/

// Handling click events using event listener
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#000';

  // Generates a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Resets the score
  score = 20;

  /* Catch a glimpse of the secret number
    // document.querySelector('.number').textContent = secretNumber;
    */
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number here!🙊';

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // When current score is greater than previous highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '👆 Too high!' : '👇 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f0140f';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
}); // What kind of event and what to do upon hitting the button
