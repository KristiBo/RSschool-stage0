import i18Obj from '../translate.js';

const langRu = document.querySelector('.lang-ru');
const langEn = document.querySelector('.lang-en');
const words = document.querySelectorAll('[data-i18]');

langRu.addEventListener('click', () => getTranslate('ru'));

langEn.addEventListener('click', () => getTranslate('en'));

function getTranslate(lang) {
  langEn.classList.toggle('lang-active');
  langRu.classList.toggle('lang-active');
  
  words.forEach((el) => (el.textContent = i18Obj[lang][el.dataset.i18]));  
}
