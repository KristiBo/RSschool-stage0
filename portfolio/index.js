console.log('1. Смена изображений в секции portfolio +25\n2. Перевод страницы на два языка +25\n3. Переключение светлой и тёмной темы +25');

const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
iconBurger.addEventListener('click', function openMenu() {
  document.body.classList.toggle('lock');
  iconBurger.classList.toggle('open');
  menuBurger.classList.toggle('open');
});

const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach(el => el.addEventListener('click', function linkOpen() {
  document.body.classList.remove('lock');
  iconBurger.classList.remove('open');
  menuBurger.classList.remove('open');
}));

const portfolioButtons = document.querySelector('.buttons-portfolio');
const portfolioButton = document.querySelectorAll('.portfolio-btn');
const portfolioPhoto = document.querySelectorAll('.photo');
portfolioButtons.addEventListener('click', function changePhoto(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    const season = event.target.dataset.season;
    portfolioPhoto.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    portfolioButton.forEach(el => el.classList.remove('button-colored'));
    event.target.classList.toggle('button-colored');
  };
});

import i18Obj from "./translate.js";
const langRu = document.querySelector('.lang-ru');
const langEn = document.querySelector('.lang-en');
const words = document.querySelectorAll('[data-i18]');
function getTranslate(lang) {
  words.forEach(el => el.textContent = i18Obj[lang][el.dataset.i18]);
};
langRu.addEventListener('click', () => {
  getTranslate('ru');
  langEn.classList.remove('lang-active');
  langRu.classList.remove('lang-active');
  langRu.classList.toggle('lang-active');
});
langEn.addEventListener('click', () => {
  getTranslate('en');
  langRu.classList.remove('lang-active');
  langEn.classList.remove('lang-active');
  langEn.classList.toggle('lang-active');
});

const elForChange = ['body', '.skills-section', '.portfolio-section', '.video-section', '.price-section', '.portfolio-btn', '.section-title', '.nav', '.nav-link', '.burger'];
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', changeTheme);
function changeTheme() {
  themeBtn.classList.remove('sun-btn');
  themeBtn.classList.toggle('moon-btn');
  themeBtn.classList.toggle('sun-btn');
  elForChange.forEach((el) => {
    document.querySelectorAll(el).forEach((el) => el.classList.toggle('sun-theme'));
  });
};
