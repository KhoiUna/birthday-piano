//Tracking variables
let firstTracker = 1;
let secondTracker = 7;
let thirdTracker = 13;
let fourthTracker = 21;

//Change keyboard's color functions
const silver = (event) => {
  event.target.style.backgroundColor = "silver";
  if (event.target.tagName === "P") {
    let key = event.target.parentNode.id;
    document.querySelector(`#${key}`).style.backgroundColor = "silver";
  }
};

const white = (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.borderColor = "black";
  if (event.target.tagName === "P") {
    let key = event.target.parentNode.id;
    document.querySelector(`#${key}`).style.backgroundColor = "white";
  }
};

const black = (event) => {
  event.target.style.backgroundColor = "black";
  event.target.style.borderColor = "black";
};

//This part is for mouse events
// This part is for white keys
const f = document.querySelector("#f");
f.addEventListener("pointerdown", (event) => {
  silver(event);
  fNote.play();
});
f.addEventListener("pointerup", (event) => {
  white(event);
  fNote.pause();
});

const g = document.querySelector("#g");
g.addEventListener("pointerdown", (event) => {
  silver(event);
  gNote.play();
  if (firstTracker === 1 || firstTracker === 2 || firstTracker === 4) {
    trackerOne();
    firstTracker++;
  }
  if (firstTracker === 7) {
    if (secondTracker === 7 || secondTracker === 8 || secondTracker === 10) {
      trackerTwo();
      secondTracker++;
    }
  }
  if (secondTracker === 13) {
    if (thirdTracker === 13 || thirdTracker === 14) {
      trackerThree();
      thirdTracker++;
    }
  }
});
g.addEventListener("pointerup", (event) => {
  white(event);
  gNote.pause();

  if (firstTracker === 2) {
    g.style.backgroundColor = "rgb(240, 80, 80)";
  }
  if (firstTracker === 7) {
    if (secondTracker === 8) {
      g.style.backgroundColor = "rgb(240, 80, 80)";
    }
  }
  if (secondTracker === 13) {
    if (thirdTracker === 14) {
      g.style.backgroundColor = "rgb(240, 80, 80)";
    }
  }
});

const a = document.querySelector("#a");
a.addEventListener("pointerdown", (event) => {
  silver(event);
  aNote.play();
  if (firstTracker === 3) {
    trackerOne();
    firstTracker++;
  }
  if (firstTracker === 7) {
    if (secondTracker === 9) {
      trackerTwo();
      secondTracker++;
    }
  }
  if (secondTracker === 13) {
    if (thirdTracker === 20) {
      trackerThree();
      thirdTracker++;
    }
  }
});
a.addEventListener("pointerup", (event) => {
  white(event);
  aNote.pause();
});

const b = document.querySelector("#b");
b.addEventListener("pointerdown", (event) => {
  silver(event);
  bNote.play();
  if (firstTracker === 6) {
    trackerOne();
    firstTracker++;
  }
  if (secondTracker === 13) {
    if (thirdTracker === 19) {
      trackerThree();
      thirdTracker++;
    }
  }
});
b.addEventListener("pointerup", (event) => {
  white(event);
  bNote.pause();
});

const c = document.querySelector("#c");
c.addEventListener("pointerdown", (event) => {
  silver(event);
  cNote.play();
  if (firstTracker === 5) {
    trackerOne();
    firstTracker++;
  }
  if (firstTracker === 7) {
    if (secondTracker === 12) {
      trackerTwo();
      secondTracker++;
    }
  }
  if (secondTracker === 13) {
    if (thirdTracker === 17 || thirdTracker === 18) {
      trackerThree();
      thirdTracker++;
    }
  }
  if (thirdTracker === 21) {
    if (fourthTracker === 24 || fourthTracker === 26) {
      trackerFour();
      fourthTracker++;
    }
  }
});
c.addEventListener("pointerup", (event) => {
  white(event);
  cNote.pause();
  if (secondTracker === 13) {
    if (thirdTracker === 18) {
      c.style.backgroundColor = "rgb(240, 80, 80)";
    }
  }
});

const d = document.querySelector("#d");
d.addEventListener("pointerdown", (event) => {
  silver(event);
  dNote.play();
  if (firstTracker === 7) {
    if (secondTracker === 11) {
      trackerTwo();
      secondTracker++;
    }
  }
  if (thirdTracker === 21) {
    if (fourthTracker === 25) {
      trackerFour();
      fourthTracker++;
    }
  }
});
d.addEventListener("pointerup", (event) => {
  white(event);
  dNote.pause();
});

const e = document.querySelector("#e");
e.addEventListener("pointerdown", (event) => {
  silver(event);
  eNote.play();
  if (thirdTracker === 16) {
    trackerThree();
    thirdTracker++;
  }
  if (thirdTracker === 21) {
    if (fourthTracker === 23) {
      trackerFour();
      fourthTracker++;
    }
  }
});
e.addEventListener("pointerup", (event) => {
  white(event);
  eNote.pause();
});

const fHigh = document.querySelector("#f-high");
fHigh.addEventListener("pointerdown", (event) => {
  silver(event);
  fHighNote.play();
  if (thirdTracker === 21) {
    if (fourthTracker === 21 || fourthTracker === 22) {
      trackerFour();
      fourthTracker++;
    }
  }
});
fHigh.addEventListener("pointerup", (event) => {
  white(event);
  fHighNote.pause();
  if (thirdTracker === 21) {
    if (fourthTracker === 22) {
      fHigh.style.backgroundColor = "rgb(240, 80, 80)";
    }
  }
});

const gHigh = document.querySelector("#g-high");
gHigh.addEventListener("pointerdown", (event) => {
  silver(event);
  gHighNote.play();
  if (secondTracker === 13) {
    if (thirdTracker === 15) {
      trackerThree();
      thirdTracker++;
    }
  }
});
gHigh.addEventListener("pointerup", (event) => {
  white(event);
  gHighNote.pause();
});

const aHigh = document.querySelector("#a-high");
aHigh.addEventListener("pointerdown", (event) => {
  silver(event);
  aHighNote.play();
});
aHigh.addEventListener("pointerup", (event) => {
  white(event);
  aHighNote.pause();
});

const bHigh = document.querySelector("#b-high");
bHigh.addEventListener("pointerdown", (event) => {
  silver(event);
  bHighNote.play();
});
bHigh.addEventListener("pointerup", (event) => {
  white(event);
  bHighNote.pause();
});
///
///

///
///
// This part is for black keys
const blackOne = document.querySelector("#black-key-one");
blackOne.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  fSharpNote.play();
});
blackOne.addEventListener("pointerup", (event) => {
  black(event);
  fSharpNote.pause();
});

const blackTwo = document.querySelector("#black-key-two");
blackTwo.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  gSharpNote.play();
});
blackTwo.addEventListener("pointerup", (event) => {
  black(event);
  gSharpNote.pause();
});

const blackThree = document.querySelector("#black-key-three");
blackThree.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  aSharpNote.play();
});
blackThree.addEventListener("pointerup", (event) => {
  black(event);
  aSharpNote.pause();
});

const blackFour = document.querySelector("#black-key-four");
blackFour.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  cSharpNote.play();
});
blackFour.addEventListener("pointerup", (event) => {
  black(event);
  cSharpNote.pause();
});

const blackFive = document.querySelector("#black-key-five");
blackFive.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  dSharpNote.play();
});
blackFive.addEventListener("pointerup", (event) => {
  black(event);
  dSharpNote.pause();
});

const blackSix = document.querySelector("#black-key-six");
blackSix.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  fHighSharpNote.play();
});
blackSix.addEventListener("pointerup", (event) => {
  black(event);
  fHighSharpNote.pause();
});

const blackSeven = document.querySelector("#black-key-seven");
blackSeven.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  gHighSharpNote.play();
});
blackSeven.addEventListener("pointerup", (event) => {
  black(event);
  gHighSharpNote.pause();
});

const blackEight = document.querySelector("#black-key-eight");
blackEight.addEventListener("pointerdown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
  aHighSharpNote.play();
});
blackEight.addEventListener("pointerup", (event) => {
  black(event);
  aHighSharpNote.pause();
});
