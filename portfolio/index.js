//console.log();//

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