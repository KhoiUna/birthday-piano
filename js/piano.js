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

//This part is for mouse events:

// This part is for white keys
const f = document.querySelector("#f");
f.addEventListener("pointerdown", () => {
  silver(event);
  fNote.play();
});
f.addEventListener("pointerup", () => {
  white(event);
  fNote.pause();
});

const g = document.querySelector("#g");
g.addEventListener("pointerdown", () => {
  silver(event);
  gNote.play();
});
g.addEventListener("pointerup", () => {
  white(event);
  gNote.pause();
});

const a = document.querySelector("#a");
a.addEventListener("pointerdown", () => {
  silver(event);
  aNote.play();
});
a.addEventListener("pointerup", () => {
  white(event);
  aNote.pause();
});

const b = document.querySelector("#b");
b.addEventListener("pointerdown", () => {
  silver(event);
  bNote.play();
});
b.addEventListener("pointerup", () => {
  white(event);
  bNote.pause();
});

const c = document.querySelector("#c");
c.addEventListener("pointerdown", () => {
  silver(event);
  cNote.play();
});
c.addEventListener("pointerup", () => {
  white(event);
  cNote.pause();
});

const d = document.querySelector("#d");
d.addEventListener("pointerdown", () => {
  silver(event);
  dNote.play();
});
d.addEventListener("pointerup", () => {
  white(event);
  dNote.pause();
});

const e = document.querySelector("#e");
e.addEventListener("pointerdown", () => {
  silver(event);
  eNote.play();
});
e.addEventListener("pointerup", () => {
  white(event);
  eNote.pause();
});

const fHigh = document.querySelector("#f-high");
fHigh.addEventListener("pointerdown", () => {
  silver(event);
  fHighNote.play();
});
fHigh.addEventListener("pointerup", () => {
  white(event);
  fHighNote.pause();
});

const gHigh = document.querySelector("#g-high");
gHigh.addEventListener("pointerdown", () => {
  silver(event);
  gHighNote.play();
});
gHigh.addEventListener("pointerup", () => {
  white(event);
  gHighNote.pause();
});

const aHigh = document.querySelector("#a-high");
aHigh.addEventListener("pointerdown", () => {
  silver(event);
  aHighNote.play();
});
aHigh.addEventListener("pointerup", () => {
  white(event);
  aHighNote.pause();
});

const bHigh = document.querySelector("#b-high");
bHigh.addEventListener("pointerdown", () => {
  silver(event);
  bHighNote.play();
});
bHigh.addEventListener("pointerup", () => {
  white(event);
  bHighNote.pause();
});

// This part is for black keys
const blackOne = document.querySelector("#black-key-one");
blackOne.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackOne.addEventListener("pointerup", () => {
  black(event);
});

const blackTwo = document.querySelector("#black-key-two");
blackTwo.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackTwo.addEventListener("pointerup", () => {
  black(event);
});

const blackThree = document.querySelector("#black-key-three");
blackThree.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackThree.addEventListener("pointerup", () => {
  black(event);
});

const blackFour = document.querySelector("#black-key-four");
blackFour.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFour.addEventListener("pointerup", () => {
  black(event);
});

const blackFive = document.querySelector("#black-key-five");
blackFive.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFive.addEventListener("pointerup", () => {
  black(event);
});

const blackSix = document.querySelector("#black-key-six");
blackSix.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSix.addEventListener("pointerup", () => {
  black(event);
});

const blackSeven = document.querySelector("#black-key-seven");
blackSeven.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSeven.addEventListener("pointerup", () => {
  black(event);
});

const blackEight = document.querySelector("#black-key-eight");
blackEight.addEventListener("pointerdown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackEight.addEventListener("pointerup", () => {
  black(event);
});
