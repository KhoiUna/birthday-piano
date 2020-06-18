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

const activate = (event) => {
  if (event === "mousedown" || event === "mouseup") {
    event.preventDefault();
  } else if (event === "touchstart" || event === "touchend") {
    event.preventDefault();
  }
};

//This part is for mouse events:

// This part is for white keys
const f = document.querySelector("#f");
f.addEventListener("mousedown", () => {
  silver(event);
  fNote.play();
});
f.addEventListener("mouseup", () => {
  white(event);
  fNote.pause();
});

const g = document.querySelector("#g");
g.addEventListener("mousedown", () => {
  silver(event);
  gNote.play();
});
g.addEventListener("mouseup", () => {
  white(event);
  gNote.pause();
});

const a = document.querySelector("#a");
a.addEventListener("mousedown", () => {
  silver(event);
  aNote.play();
});
a.addEventListener("mouseup", () => {
  white(event);
  aNote.pause();
});

const b = document.querySelector("#b");
b.addEventListener("mousedown", () => {
  silver(event);
  bNote.play();
});
b.addEventListener("mouseup", () => {
  white(event);
  bNote.pause();
});

const c = document.querySelector("#c");
c.addEventListener("mousedown", () => {
  silver(event);
  cNote.play();
});
c.addEventListener("mouseup", () => {
  white(event);
  cNote.pause();
});

const d = document.querySelector("#d");
d.addEventListener("mousedown", () => {
  silver(event);
  dNote.play();
});
d.addEventListener("mouseup", () => {
  white(event);
  dNote.pause();
});

const e = document.querySelector("#e");
e.addEventListener("mousedown", () => {
  silver(event);
  eNote.play();
});
e.addEventListener("mouseup", () => {
  white(event);
  eNote.pause();
});

const fHigh = document.querySelector("#f-high");
fHigh.addEventListener("mousedown", () => {
  silver(event);
  fHighNote.play();
});
fHigh.addEventListener("mouseup", () => {
  white(event);
  fHighNote.pause();
});

const gHigh = document.querySelector("#g-high");
gHigh.addEventListener("mousedown", () => {
  silver(event);
  gHighNote.play();
});
gHigh.addEventListener("mouseup", () => {
  white(event);
  gHighNote.pause();
});

const aHigh = document.querySelector("#a-high");
aHigh.addEventListener("mousedown", () => {
  silver(event);
  aHighNote.play();
});
aHigh.addEventListener("mouseup", () => {
  white(event);
  aHighNote.pause();
});

const bHigh = document.querySelector("#b-high");
bHigh.addEventListener("mousedown", () => {
  silver(event);
  bHighNote.play();
});
bHigh.addEventListener("mouseup", () => {
  white(event);
  bHighNote.pause();
});

// This part is for black keys
const blackOne = document.querySelector("#black-key-one");
blackOne.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackOne.addEventListener("mouseup", () => {
  black(event);
});

const blackTwo = document.querySelector("#black-key-two");
blackTwo.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackTwo.addEventListener("mouseup", () => {
  black(event);
});

const blackThree = document.querySelector("#black-key-three");
blackThree.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackThree.addEventListener("mouseup", () => {
  black(event);
});

const blackFour = document.querySelector("#black-key-four");
blackFour.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFour.addEventListener("mouseup", () => {
  black(event);
});

const blackFive = document.querySelector("#black-key-five");
blackFive.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFive.addEventListener("mouseup", () => {
  black(event);
});

const blackSix = document.querySelector("#black-key-six");
blackSix.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSix.addEventListener("mouseup", () => {
  black(event);
});

const blackSeven = document.querySelector("#black-key-seven");
blackSeven.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSeven.addEventListener("mouseup", () => {
  black(event);
});

const blackEight = document.querySelector("#black-key-eight");
blackEight.addEventListener("mousedown", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackEight.addEventListener("mouseup", () => {
  black(event);
});

activate(event.type);
