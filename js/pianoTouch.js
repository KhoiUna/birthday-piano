const silver = (event) => {
  event.target.style.backgroundColor = "silver";
};

const white = (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.borderColor = "black";
};

const black = (event) => {
  event.target.style.backgroundColor = "black";
  event.target.style.borderColor = "black";
};
//This part is for touch events:

// This part is for white keys
const f = document.querySelector("#f");
f.addEventListener("touchstart", () => {
  silver(event);
  fNote.play();
});
f.addEventListener("touchend", () => {
  white(event);
  fNote.pause();
});

const g = document.querySelector("#g");
g.addEventListener("touchstart", () => {
  silver(event);
  gNote.play();
});
g.addEventListener("touchend", () => {
  white(event);
  gNote.pause();
});

const a = document.querySelector("#a");
a.addEventListener("touchstart", () => {
  silver(event);
  aNote.play();
});
a.addEventListener("touchend", () => {
  white(event);
  aNote.pause();
});

const b = document.querySelector("#b");
b.addEventListener("touchstart", () => {
  silver(event);
  bNote.play();
});
b.addEventListener("touchend", () => {
  white(event);
  bNote.pause();
});

const c = document.querySelector("#c");
c.addEventListener("touchstart", () => {
  silver(event);
  cNote.play();
});
c.addEventListener("touchend", () => {
  white(event);
  cNote.pause();
});

const d = document.querySelector("#d");
d.addEventListener("touchstart", () => {
  silver(event);
  dNote.play();
});
d.addEventListener("touchend", () => {
  white(event);
  dNote.pause();
});

const e = document.querySelector("#e");
e.addEventListener("touchstart", () => {
  silver(event);
  eNote.play();
});
e.addEventListener("touchend", () => {
  white(event);
  eNote.pause();
});

const fHigh = document.querySelector("#f-high");
fHigh.addEventListener("touchstart", () => {
  silver(event);
  fHighNote.play();
});
fHigh.addEventListener("touchend", () => {
  white(event);
  fHighNote.pause();
});

const gHigh = document.querySelector("#g-high");
gHigh.addEventListener("touchstart", () => {
  silver(event);
  gHighNote.play();
});
gHigh.addEventListener("touchend", () => {
  white(event);
  gHighNote.pause();
});

const aHigh = document.querySelector("#a-high");
aHigh.addEventListener("touchstart", () => {
  silver(event);
  aHighNote.play();
});
aHigh.addEventListener("touchend", () => {
  white(event);
  aHighNote.pause();
});

const bHigh = document.querySelector("#b-high");
bHigh.addEventListener("touchstart", () => {
  silver(event);
  bHighNote.play();
});
bHigh.addEventListener("touchend", () => {
  white(event);
  bHighNote.pause();
});

// This part is for black keys
const blackOne = document.querySelector("#black-key-one");
blackOne.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackOne.addEventListener("touchend", () => {
  black(event);
});

const blackTwo = document.querySelector("#black-key-two");
blackTwo.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackTwo.addEventListener("touchend", () => {
  black(event);
});

const blackThree = document.querySelector("#black-key-three");
blackThree.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackThree.addEventListener("touchend", () => {
  black(event);
});

const blackFour = document.querySelector("#black-key-four");
blackFour.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFour.addEventListener("touchend", () => {
  black(event);
});

const blackFive = document.querySelector("#black-key-five");
blackFive.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFive.addEventListener("touchend", () => {
  black(event);
});

const blackSix = document.querySelector("#black-key-six");
blackSix.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSix.addEventListener("touchend", () => {
  black(event);
});

const blackSeven = document.querySelector("#black-key-seven");
blackSeven.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSeven.addEventListener("touchend", () => {
  black(event);
});

const blackEight = document.querySelector("#black-key-eight");
blackEight.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackEight.addEventListener("touchend", () => {
  black(event);
});
