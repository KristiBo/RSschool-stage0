const song = document.querySelector('.song');
const progressLine = document.querySelector('.progress-line');
const songProgress = document.querySelector('.song-progress');
const initTime = document.querySelector('.init-time');
const finishTime = document.querySelector('.finish-time');

const getSongDuration = () => {
  const min = parseInt(song.duration / 60);
  const sec = parseInt(song.duration % 60);

  sec < 10
    ? (finishTime.textContent = `${min}:${'0' + sec}`)
    : (finishTime.textContent = `${min}:${sec}`);
};

const updateCurrentTime = (event) => {
  const min = parseInt(song.currentTime / 60);
  const sec = parseInt(song.currentTime % 60);
  const progressLevel =
    (event.target.currentTime / event.target.duration) * 100;

  songProgress.style.width = `${progressLevel}%`;

  sec < 10
    ? (initTime.textContent = `${min}:${'0' + sec}`)
    : (initTime.textContent = `${min}:${sec}`);
};

window.onload = () => getSongDuration();

song.addEventListener('loadeddata', getSongDuration);

song.addEventListener('timeupdate', (e) => updateCurrentTime(e));

progressLine.addEventListener('click', (event) => {
  const fullProgress = progressLine.clientWidth;

  song.currentTime = (event.offsetX / fullProgress) * song.duration;
});
