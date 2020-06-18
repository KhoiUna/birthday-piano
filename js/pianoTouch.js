//This part is for touch events:

// This part is for white keys
f.addEventListener("touchstart", () => {
  silver(event);
  fNote.play();
});
f.addEventListener("touchend", () => {
  white(event);
  fNote.pause();
});

g.addEventListener("touchstart", () => {
  silver(event);
});
g.addEventListener("touchend", () => {
  white(event);
});

a.addEventListener("touchstart", () => {
  silver(event);
});
a.addEventListener("touchend", () => {
  white(event);
});

b.addEventListener("touchstart", () => {
  silver(event);
});
b.addEventListener("touchend", () => {
  white(event);
});

c.addEventListener("touchstart", () => {
  silver(event);
});
c.addEventListener("touchend", () => {
  white(event);
});

d.addEventListener("touchstart", () => {
  silver(event);
});
d.addEventListener("touchend", () => {
  white(event);
});

e.addEventListener("touchstart", () => {
  silver(event);
});
e.addEventListener("touchend", () => {
  white(event);
});

fHigh.addEventListener("touchstart", () => {
  silver(event);
});
fHigh.addEventListener("touchend", () => {
  white(event);
});

gHigh.addEventListener("touchstart", () => {
  silver(event);
});
gHigh.addEventListener("touchend", () => {
  white(event);
});

aHigh.addEventListener("touchstart", () => {
  silver(event);
});
aHigh.addEventListener("touchend", () => {
  white(event);
});

bHigh.addEventListener("touchstart", () => {
  silver(event);
});
bHigh.addEventListener("touchend", () => {
  white(event);
});

// This part is for black keys

blackOne.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackOne.addEventListener("touchend", () => {
  black(event);
});

blackTwo.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackTwo.addEventListener("touchend", () => {
  black(event);
});

blackThree.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackThree.addEventListener("touchend", () => {
  black(event);
});

blackFour.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFour.addEventListener("touchend", () => {
  black(event);
});

blackFive.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackFive.addEventListener("touchend", () => {
  black(event);
});

blackSix.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSix.addEventListener("touchend", () => {
  black(event);
});

blackSeven.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackSeven.addEventListener("touchend", () => {
  black(event);
});

blackEight.addEventListener("touchstart", () => {
  silver(event);
  event.target.style.borderColor = "silver";
});
blackEight.addEventListener("touchend", () => {
  black(event);
});

activate(event.type);
