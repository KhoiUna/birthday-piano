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
});
g.addEventListener("touchend", () => {
  white(event);
});

const a = document.querySelector("#a");
a.addEventListener("touchstart", (event) => {
  silver(event);
});
a.addEventListener("touchend", (event) => {
  white(event);
});

const b = document.querySelector("#b");
b.addEventListener("touchstart", (event) => {
  silver(event);
});
b.addEventListener("touchend", (event) => {
  white(event);
});

const c = document.querySelector("#c");
c.addEventListener("touchstart", (event) => {
  silver(event);
});
c.addEventListener("touchend", (event) => {
  white(event);
});

const d = document.querySelector("#d");
d.addEventListener("touchstart", (event) => {
  silver(event);
});
d.addEventListener("touchend", (event) => {
  white(event);
});

const e = document.querySelector("#e");
e.addEventListener("touchstart", (event) => {
  silver(event);
});
e.addEventListener("touchend", (event) => {
  white(event);
});

const fHigh = document.querySelector("#f-high");
fHigh.addEventListener("touchstart", (event) => {
  silver(event);
});
fHigh.addEventListener("touchend", (event) => {
  white(event);
});

const gHigh = document.querySelector("#g-high");
gHigh.addEventListener("touchstart", (event) => {
  silver(event);
});
gHigh.addEventListener("touchend", (event) => {
  white(event);
});

const aHigh = document.querySelector("#a-high");
aHigh.addEventListener("touchstart", (event) => {
  silver(event);
});
aHigh.addEventListener("touchend", (event) => {
  white(event);
});

const bHigh = document.querySelector("#b-high");
bHigh.addEventListener("touchstart", (event) => {
  silver(event);
});
bHigh.addEventListener("touchend", (event) => {
  white(event);
});

// This part is for black keys
const blackOne = document.querySelector("#black-key-one");
blackOne.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackOne.addEventListener("touchend", (event) => {
  black(event);
});

const blackTwo = document.querySelector("#black-key-two");
blackTwo.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackTwo.addEventListener("touchend", (event) => {
  black(event);
});

const blackThree = document.querySelector("#black-key-three");
blackThree.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackThree.addEventListener("touchend", (event) => {
  black(event);
});

const blackFour = document.querySelector("#black-key-four");
blackFour.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFour.addEventListener("touchend", (event) => {
  black(event);
});

const blackFive = document.querySelector("#black-key-five");
blackFive.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFive.addEventListener("touchend", (event) => {
  black(event);
});

const blackSix = document.querySelector("#black-key-six");
blackSix.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSix.addEventListener("touchend", (event) => {
  black(event);
});

const blackSeven = document.querySelector("#black-key-seven");
blackSeven.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSeven.addEventListener("touchend", (event) => {
  black(event);
});

const blackEight = document.querySelector("#black-key-eight");
blackEight.addEventListener("touchstart", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackEight.addEventListener("touchend", (event) => {
  black(event);
});
