const iconBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav-link');

iconBurger.addEventListener('click', toggleBurgerMenu);

menuLinks.forEach((el) => el.addEventListener('click', closeBurgerMenu));

function toggleBurgerMenu() {
  document.body.classList.toggle('lock');
  iconBurger.classList.toggle('open');
  menuBurger.classList.toggle('open');
}

function closeBurgerMenu() {
  document.body.classList.remove('lock');
  iconBurger.classList.remove('open');
  menuBurger.classList.remove('open');
}
