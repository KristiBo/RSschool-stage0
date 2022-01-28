console.log();

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
