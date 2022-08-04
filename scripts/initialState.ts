import { red } from "./global";

// Set initial states
// 1st slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-one .lyric-box-one"
).style.backgroundColor = red;
document.getElementById("g").style.backgroundColor = red;

// 2nd slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-two .lyric-box-one"
).style.backgroundColor = red;

// 3rd slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-three .lyric-box-one"
).style.backgroundColor = red;

// 4th slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-four .lyric-box-one"
).style.backgroundColor = red;

// Randomize body background color
const randomTheme = () => {
  const color = [
    "#ff81d5",
    "yellow",
    "orange",
    "aquamarine",
    "rgb(82, 241, 42)",
  ];

  const choice = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[choice];
};
randomTheme();
