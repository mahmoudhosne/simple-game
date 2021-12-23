let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#777';
    document.querySelector('h1').textContent = 'Good';
    document.querySelector('h1').style.color = 'balck';
    if (score > 0) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.message').textContent = 'you Lose The Game';
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose the game';
    }
  }
});
const retuern = buttoon => {
  buttoon.addEventListener('click', () => {
    score = 20;
    highScore = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15 rem';
  });
};
let btn = document.querySelector('.again');
retuern(btn);
