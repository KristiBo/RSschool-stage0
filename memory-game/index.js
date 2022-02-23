console.log(`1. Вёрстка +10
2. Логика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10
3. Игра завершается, когда открыты все карточки +10
4. По окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10
5. По клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переворачиваются рубашкой вверх +10
6. Дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
(предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо)
7. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10`);

const startBtn = document.querySelector('.start-btn');
const text = document.querySelector('.text');
const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const stepsCount = document.querySelector('.steps');
const resultBtn = document.querySelector('.result-btn');
const resultModal = document.querySelector('.results-modal');
const resultText = document.querySelector('.results-text');
const modalEnd = document.querySelector('.modal-end');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalEndText = document.querySelector('.end-text');

let steps = 0;
let firstCard;
let secondCard;
let spin = false;
let fieldLocked = false;
let countMatch = 0;
let gameResults = [];

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
    let newResult = stepsCount.textContent + ' steps';
    addResults(newResult);
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
  modalEnd.classList.add('open');
  modalEndText.textContent = `Your result is ${steps} steps`;
};

function openResultModal() {
  resultModal.classList.add('open');
  resultText.textContent = '';
  getResults();
};

function closeModal() {
  modalEnd.classList.remove('open');
  resultModal.classList.remove('open');
};

resultBtn.addEventListener('click', openResultModal);

modalBtn.forEach(el => el.addEventListener('click', closeModal));

function getResults() {
  if (localStorage.getItem('result')) {
    gameResults = JSON.parse(localStorage.getItem('result'));
    showResults(gameResults);
  };
};

function showResults(gameResults) {
  if (gameResults.length > 0) {
    gameResults.forEach((el) => {
      let result = document.createElement('li');
      result.classList.add('result');
      result.textContent = el;
      resultText.appendChild(result);
    });
  };
};

function addResults(newResult) {
  if (gameResults.length === 10) {
    gameResults.shift();
    gameResults.push(newResult);
  } else {
    gameResults.push(newResult);
  };

  localStorage.setItem('result', JSON.stringify(gameResults));
  showResults(gameResults);
};
