const silver = (event) => {
  event.target.style.backgroundColor = "red";
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
});
g.addEventListener("mouseup", () => {
  white(event);
});

const a = document.querySelector("#a");
a.addEventListener("mousedown", (event) => {
  silver(event);
});
a.addEventListener("mouseup", (event) => {
  white(event);
});

const b = document.querySelector("#b");
b.addEventListener("mousedown", (event) => {
  silver(event);
});
b.addEventListener("mouseup", (event) => {
  white(event);
});

const c = document.querySelector("#c");
c.addEventListener("mousedown", (event) => {
  silver(event);
});
c.addEventListener("mouseup", (event) => {
  white(event);
});

const d = document.querySelector("#d");
d.addEventListener("mousedown", (event) => {
  silver(event);
});
d.addEventListener("mouseup", (event) => {
  white(event);
});

const e = document.querySelector("#e");
e.addEventListener("mousedown", (event) => {
  silver(event);
});
e.addEventListener("mouseup", (event) => {
  white(event);
});

const fHigh = document.querySelector("#f-high");
fHigh.addEventListener("mousedown", (event) => {
  silver(event);
});
fHigh.addEventListener("mouseup", (event) => {
  white(event);
});

const gHigh = document.querySelector("#g-high");
gHigh.addEventListener("mousedown", (event) => {
  silver(event);
});
gHigh.addEventListener("mouseup", (event) => {
  white(event);
});

const aHigh = document.querySelector("#a-high");
aHigh.addEventListener("mousedown", (event) => {
  silver(event);
});
aHigh.addEventListener("mouseup", (event) => {
  white(event);
});

const bHigh = document.querySelector("#b-high");
bHigh.addEventListener("mousedown", (event) => {
  silver(event);
});
bHigh.addEventListener("mouseup", (event) => {
  white(event);
});

// This part is for black keys
const blackOne = document.querySelector("#black-key-one");
blackOne.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackOne.addEventListener("mouseup", (event) => {
  black(event);
});

const blackTwo = document.querySelector("#black-key-two");
blackTwo.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackTwo.addEventListener("mouseup", (event) => {
  black(event);
});

const blackThree = document.querySelector("#black-key-three");
blackThree.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackThree.addEventListener("mouseup", (event) => {
  black(event);
});

const blackFour = document.querySelector("#black-key-four");
blackFour.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFour.addEventListener("mouseup", (event) => {
  black(event);
});

const blackFive = document.querySelector("#black-key-five");
blackFive.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFive.addEventListener("mouseup", (event) => {
  black(event);
});

const blackSix = document.querySelector("#black-key-six");
blackSix.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSix.addEventListener("mouseup", (event) => {
  black(event);
});

const blackSeven = document.querySelector("#black-key-seven");
blackSeven.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSeven.addEventListener("mouseup", (event) => {
  black(event);
});

const blackEight = document.querySelector("#black-key-eight");
blackEight.addEventListener("mousedown", (event) => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackEight.addEventListener("mouseup", (event) => {
  black(event);
});
