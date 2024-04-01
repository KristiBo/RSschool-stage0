const portfolioBtnsContainer = document.querySelector('.buttons-portfolio');
const portfolioButtons = document.querySelectorAll('.portfolio-btn');
const portfolioPhotos = document.querySelectorAll('.photo');

portfolioBtnsContainer.addEventListener('click', (e) => changePhotos(e));

function changePhotos(event) {
  if (event.target.classList.contains('portfolio-btn')) {
    const season = event.target.dataset.season;

    portfolioPhotos.forEach(
      (img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`)
    );

    portfolioButtons.forEach((el) => el.classList.remove('button-colored'));
    event.target.classList.add('button-colored');
  }
}
