const fSound = new Audio("sound/F.m4a");
const fNote = {
  play() {
    fSound.load();
    fSound.play();
    fSound.volume = 1;
  },
  pause() {
    fSound.pause();
  },
};
