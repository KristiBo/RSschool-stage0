console.log();

const player = document.querySelector('.player');
const song = document.querySelector('.song');
const songImg = document.querySelector('.song-img');
const track = document.querySelector('.track');
const artist = document.querySelector('.artist');
const progressLine = document.querySelector('.progress-line');
const songProgress = document.querySelector('.song-progress');
const prevBtn = document.querySelector('.prev-btn');
const playBtn = document.querySelector('.play-btn');
const playImg = document.querySelector('.play-img');
const nextBtn = document.querySelector('.next-btn');

function playSong() {
  player.classList.add('play');
  playImg.src = `./assets/png/pause.png`;
  song.play();
};

function pauseSong() {
  player.classList.remove('play');
  playImg.src = `./assets/png/play.png`;
  song.pause();
};

playBtn.addEventListener('click', () => { 
  if (player.classList.contains('play')) {
    pauseSong();
  } else {
    playSong();
  };
});