console.log();

const cards = document.querySelectorAll('.card');
const stepsCount = document.querySelector('.steps');

let steps = 0;
let firstCard;
let secondCard;
let spin = false;
let fieldLocked = false;

stepsCount.textContent = steps;

(function getRandom() {
  cards.forEach(el => {
    let randomCard = Math.floor(Math.random() * 20);
    el.style.order = randomCard;
  });
})();

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

function cardsMatch() {
  if(firstCard.dataset.front === secondCard.dataset.front) {
    firstCard.removeEventListener('click', spinCard);
    secondCard.removeEventListener('click', spinCard);
  } else {
    fieldLocked = true;
    
    setTimeout(() => {
      firstCard.classList.remove('spin');
      secondCard.classList.remove('spin');
      fieldLocked = false;
      fieldReset();
    }, 1000);  
  };
  
  steps ++;
  stepsCount.textContent = steps;
};

function fieldReset() {
  firstCard = secondCard = null;
  spin = fieldLocked = false;
};

cards.forEach(el => el.addEventListener('click', spinCard));