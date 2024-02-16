import { playSong } from './playback.js';

const song = document.querySelector('.song');
const songImg = document.querySelector('.song-img');
const track = document.querySelector('.track');
const artist = document.querySelector('.artist');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const songs = [
  {
    name: 'Hurricane',
    artist: 'Thirty Seconds To Mars',
    src: './assets/audio/Hurricane.mp3',
    img: './assets/image/bcgsong1.jpg',
  },
  {
    name: 'Bleed It Out',
    artist: 'Linkin Park',
    src: './assets/audio/Bleed It Out.mp3',
    img: './assets/image/bcgsong2.jpg',
  },
  {
    name: 'Meds',
    artist: 'Placebo',
    src: './assets/audio/Meds.mp3',
    img: './assets/image/bcgsong3.jpg',
  },
];

let songIndex = 0;

function startSong(currentSong) {
  track.innerHTML = currentSong.name;
  artist.innerHTML = currentSong.artist;
  song.src = currentSong.src;
  songImg.src = currentSong.img;
  document.body.style.backgroundImage = `url(${currentSong.img})`;
}

function nextSong() {
  songIndex += 1;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  startSong(songs[songIndex]);
  playSong();
}

function prevSong() {
  songIndex -= 1;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  startSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener('click', nextSong);

prevBtn.addEventListener('click', prevSong);

song.addEventListener('ended', nextSong);
