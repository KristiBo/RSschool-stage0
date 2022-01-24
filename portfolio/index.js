console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22');

const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
iconBurger.addEventListener('click', function openMenu() {
  document.body.classList.toggle('lock');
  iconBurger.classList.toggle('open');
  menuBurger.classList.toggle('open');
});

const menuLinks = document.querySelectorAll('.nav-link');
menuBurger.addEventListener('click', function linkOpen() {
  document.body.classList.remove('lock');
  iconBurger.classList.remove('open');
  menuBurger.classList.remove('open');
});