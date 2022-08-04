import { red } from "./global";

// Set initial state
// Slide One
document.querySelector(".lyric-grid-one .lyric-box-one").style.backgroundColor =
  red;
document.getElementById("g").style.backgroundColor = red;

// Slide Two
document.querySelector(".lyric-grid-two .lyric-box-one").style.backgroundColor =
  red;

// Slide Three
document.querySelector(
  ".lyric-grid-three .lyric-box-one"
).style.backgroundColor = red;

// Slide Four
document.querySelector(
  ".lyric-grid-four .lyric-box-one"
).style.backgroundColor = red;

// Randomize body background color
const color = ["#ff81d5", "yellow", "orange", "aquamarine", "rgb(82, 241, 42)"];
const randomTheme = (colorArr) => {
  const choice = Math.floor(Math.random() * colorArr.length);
  document.body.style.backgroundColor = color[choice];
};
randomTheme(color);
