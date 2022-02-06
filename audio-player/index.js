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

const trackNames = ['Hurricane', 'Bleed It Out', 'Meds'];
const artistNames = ['Thirty Seconds To Mars', 'Linkin Park', 'Placebo'];
let trackNameIndex = 0;
let artistNameIndex = 0;

function startSong (trackName, artistName) {
  track.innerHTML = trackName;
  artist.innerHTML = artistName;
  song.src = `./assets/audio/${trackName}.mp3`;
  songImg.src = `./assets/image/bcgsong${trackNameIndex + 1}.jpg`;
};

function nextSong() {
  trackNameIndex ++;
  artistNameIndex ++;
  if(trackNameIndex > trackNames.length - 1 && artistNameIndex > artistNames.length - 1) {
    trackNameIndex = 0;
    artistNameIndex = 0;
  };
  startSong (trackNames[trackNameIndex], artistNames[artistNameIndex]);
  playSong();
};

function prevSong() {
  trackNameIndex --;
  artistNameIndex --;
  if(trackNameIndex < 0  && artistNameIndex < 0) {
    trackNameIndex = trackNames.length - 1;
    artistNameIndex = artistNames.length - 1;
  };
  startSong (trackNames[trackNameIndex], artistNames[artistNameIndex]);
  playSong();
};

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
song.addEventListener('ended', nextSong);

song.addEventListener('timeupdate', (event) => {
  let progressLevel = (event.target.currentTime / event.target.duration) * 100;
  songProgress.style.width = `${progressLevel}%`;
});

progressLine.addEventListener('click', (event) => {
  let fullProgress = progressLine.clientWidth;
  song.currentTime = (event.offsetX / fullProgress) * song.duration;
});
