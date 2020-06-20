//This sound is for white keys

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
/////

/////
const gSound = new Audio("sound/G.m4a");
const gNote = {
  play() {
    gSound.load();
    gSound.play();
    gSound.volume = 1;
  },
  pause() {
    gSound.pause();
  },
};
/////

/////
const aSound = new Audio("sound/A.m4a");
const aNote = {
  play() {
    aSound.load();
    aSound.play();
    aSound.volume = 1;
  },
  pause() {
    aSound.pause();
  },
};
/////

/////
const bSound = new Audio("sound/B.m4a");
const bNote = {
  play() {
    bSound.load();
    bSound.play();
    bSound.volume = 1;
  },
  pause() {
    bSound.pause();
  },
};
/////

/////
const cSound = new Audio("sound/C.m4a");
const cNote = {
  play() {
    cSound.load();
    cSound.play();
    cSound.volume = 1;
  },
  pause() {
    cSound.pause();
  },
};
/////

/////
const dSound = new Audio("sound/D.m4a");
const dNote = {
  play() {
    dSound.load();
    dSound.play();
    dSound.volume = 1;
  },
  pause() {
    dSound.pause();
  },
};
/////

/////
const eSound = new Audio("sound/E.m4a");
const eNote = {
  play() {
    eSound.load();
    eSound.play();
    eSound.volume = 1;
  },
  pause() {
    eSound.pause();
  },
};
/////

/////
const fHighSound = new Audio("sound/Fhigh.m4a");
const fHighNote = {
  play() {
    fHighSound.load();
    fHighSound.play();
    fHighSound.volume = 1;
  },
  pause() {
    fHighSound.pause();
  },
};
/////

/////
const gHighSound = new Audio("sound/Ghigh.m4a");
const gHighNote = {
  play() {
    gHighSound.load();
    gHighSound.play();
    gHighSound.volume = 1;
  },
  pause() {
    gHighSound.pause();
  },
};
/////

/////
const aHighSound = new Audio("sound/Ahigh.m4a");
const aHighNote = {
  play() {
    aHighSound.load();
    aHighSound.play();
    aHighSound.volume = 1;
  },
  pause() {
    aHighSound.pause();
  },
};
/////

/////
const bHighSound = new Audio("sound/Bhigh.m4a");
const bHighNote = {
  play() {
    bHighSound.load();
    bHighSound.play();
    bHighSound.volume = 1;
  },
  pause() {
    bHighSound.pause();
  },
};
///

///
//This sound is for black keys

//Cheering sound for end of game
const cheering = new Audio("sound/cheering.mp3");
const cheerSound = () => {
  cheering.volume = 1;
  cheering.play();
};
