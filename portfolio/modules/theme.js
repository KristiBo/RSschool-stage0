const themeBtn = document.querySelector('.theme-btn');
const elForChange = [
  'body',
  '.skills-section',
  '.portfolio-section',
  '.video-section',
  '.price-section',
  '.portfolio-btn',
  '.section-title',
  '.nav',
  '.nav-link',
  '.burger',
];

themeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  themeBtn.classList.toggle('moon-btn');
  themeBtn.classList.toggle('sun-btn');

  elForChange.forEach((el) => {
    document
      .querySelectorAll(el)
      .forEach((el) => el.classList.toggle('sun-theme'));
  });
}
