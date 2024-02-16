const song = document.querySelector('.song');
const volumeDown = document.querySelector('.volumedown');
const volumeImg = document.querySelector('.volume-img');
const volumeLine = document.querySelector('.volume-line');
const volumeLevel = document.querySelector('.volume-level');

const muteSound = () => {
  song.muted = !song.muted;

  if (song.muted) {
    volumeImg.src = `./assets/png/mute.png`;
    volumeLevel.style.width = `0%`;
  } else {
    volumeImg.src = `./assets/png/volumedown.png`;
    volumeLevel.style.width = `${song.volume * 100}%`;
  }
}

volumeDown.addEventListener('click', muteSound);
