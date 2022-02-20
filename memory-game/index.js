console.log();

const startBtn = document.querySelector('.start-btn');
const text = document.querySelector('.text');
const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const stepsCount = document.querySelector('.steps');
const resultBtn = document.querySelector('.result-btn');

let steps = 0;
let firstCard;
let secondCard;
let spin = false;
let fieldLocked = false;
let countMatch = 0;

function startGame () {
  startBtn.style.display = 'none';
  text.style.display = 'flex';
  cardsContainer.style.display = 'grid';
}

startBtn.addEventListener('click', startGame);

stepsCount.textContent = steps;

/*(function getRandom() {
  cards.forEach(el => {
    let randomCard = Math.floor(Math.random() * 20);
    el.style.order = randomCard;
  });
})();*/

function spinCard(event) {
  if(fieldLocked) return;
  const selectCard = event.target.parentElement;
  
  if(selectCard === firstCard) return;
  selectCard.classList.add('spin');

  if(!spin) {
    spin = true;
    firstCard = selectCard;
  } else {
    spin = false;
    secondCard = selectCard;
    cardsMatch();
  };
};

cards.forEach(el => el.addEventListener('click', spinCard));

function cardsMatch() {
  if(firstCard.dataset.front === secondCard.dataset.front) {
    firstCard.removeEventListener('click', spinCard);
    secondCard.removeEventListener('click', spinCard);
    countMatch ++;
    console.log(countMatch);
  } else {
    fieldLocked = true;

    setTimeout(() => {
      firstCard.classList.remove('spin');
      secondCard.classList.remove('spin');
      fieldReset();
    }, 1000);
  };
  
  steps ++;
  stepsCount.textContent = steps;

  if(countMatch === 10) {
    endGame();
  };
};

function fieldReset() {
  firstCard = secondCard = null;
  spin = fieldLocked = false;
};

function endGame() {
    fieldReset();
    cards.forEach(el => el.classList.remove('spin'));
    stepsCount.textContent = 0;
    console.log('Game over');  
};
