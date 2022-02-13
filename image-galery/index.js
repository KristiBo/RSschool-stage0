console.log()

const form = document.querySelector('.search-container');
const search = document.querySelector('.input-search');
const photoContainer = document.querySelector('.photo-container');
const startUrl = 'https://api.unsplash.com/search/photos?query=architecture&per_page=24&orientation=squarish&client_id=Ytg9bYYiHSnGt-M1cFA1mPBnbm2dXkkGJQr9DHIZWzU';
let searchUrl = 'https://api.unsplash.com/search/photos?per_page=24&orientation=squarish&client_id=Ytg9bYYiHSnGt-M1cFA1mPBnbm2dXkkGJQr9DHIZWzU&query=';

async function getData(url) {
  photoContainer.innerHTML = '';
  const resp = await fetch(url);
  const data = await resp.json();
  showData(data);
};

function showData(data) {
  data.results.map((el) => {
    const img = `<img class="photo" src="${el.urls.regular}" alt="image">`;
    photoContainer.insertAdjacentHTML('afterbegin', img);
  });
};

getData(startUrl);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newSearch = `${searchUrl}${search.value}`;
  getData(newSearch);
});