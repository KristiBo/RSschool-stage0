const player = document.querySelector('.player');
const song = document.querySelector('.song');
const playBtn = document.querySelector('.play-btn');
const playImg = document.querySelector('.play-img');

export function playSong() {
  player.classList.add('play');
  playImg.src = `./assets/png/pause.png`;
  song.play();
}

function pauseSong() {
  player.classList.remove('play');
  playImg.src = `./assets/png/play.png`;
  song.pause();
}

playBtn.addEventListener('click', () => {
  if (player.classList.contains('play')) {
    pauseSong();
  } else {
    playSong();
  }
});
