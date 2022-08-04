import { red } from "./global";
import { randomTheme } from "./helpers/randomTheme";

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

// Random background color
randomTheme();
