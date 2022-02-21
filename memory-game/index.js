console.log(`Доброго дня! 
По возможности, прошу перепроверить работу в четверг.
Немного не успела доделать.
Благодарю!

1. Вёрстка +10
2. Логика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10
3. Игра завершается, когда открыты все карточки +10
4. По окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10
5. По клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переворачиваются рубашкой вверх +10
`);

const startBtn = document.querySelector('.start-btn');
const text = document.querySelector('.text');
const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const stepsCount = document.querySelector('.steps');
const resultBtn = document.querySelector('.result-btn');
const modal = document.querySelector('.modal'); 
const modalBtn = document.querySelector('.modal-btn');
const modalEndText = document.querySelector('.modal-text');

let steps = 0;
let firstCard;
let secondCard;
let spin = false;
let fieldLocked = false;
let countMatch = 0;

function startGame() {
  startBtn.style.display = 'none';
  text.style.display = 'flex';
  cardsContainer.style.display = 'grid';
};

function getRandom() {
  cards.forEach(el => {
    let randomCard = Math.floor(Math.random() * 20);
    el.style.order = randomCard;
  });
};

startBtn.addEventListener('click', startGame);

getRandom();

stepsCount.textContent = steps;

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
  } else {
    fieldLocked = true;

    setTimeout(() => {
      firstCard.classList.remove('spin');
      secondCard.classList.remove('spin');
      fieldReset();
    }, 700);
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
  endGameReset();
  openEndModal();
  cards.forEach(el => el.addEventListener('click', spinCard));
};

function endGameReset() {
  setTimeout(() => {
    cards.forEach(el => el.classList.remove('spin'));
    steps = stepsCount.textContent = 0;
    countMatch = 0;
    fieldReset();
    getRandom();
  }, 500);
};

function openEndModal() {
  modal.classList.add('open');
  modalEndText.textContent = `Your result is ${steps} steps`;
}

function closeModal() {
  modal.classList.remove('open');
}

modalBtn.addEventListener('click', closeModal);
