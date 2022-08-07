import { trackerFunction } from "./tracker";
import PianoKeyboard from "./utils/PianoKeyboard";
import happy_birthday from "../songs/happy_birthday.json";
import { red } from "./global";

// Load all audios
// const audioArrays = [
//   new Audio("/sound/F.m4a"),
//   new Audio("/sound/G.m4a"),
//   new Audio("/sound/A.m4a"),
//   new Audio("/sound/B.m4a"),
//   new Audio("/sound/C.m4a"),
//   new Audio("/sound/D.m4a"),
//   new Audio("/sound/E.m4a"),
//   new Audio("/sound/Fhigh.m4a"),
//   new Audio("/sound/Ghigh.m4a"),
//   new Audio("/sound/Ahigh.m4a"),
//   new Audio("/sound/Bhigh.m4a"),
//   new Audio("/sound/Fsharp.m4a"),
//   new Audio("/sound/Gsharp.m4a"),
//   new Audio("/sound/Asharp.m4a"),
//   new Audio("/sound/Csharp.m4a"),
//   new Audio("/sound/Dsharp.m4a"),
//   new Audio("/sound/Fsharphigh.m4a"),
//   new Audio("/sound/Gsharphigh.m4a"),
//   new Audio("/sound/Bhigh.m4a"),
// ];

let tracker = 1;

document.querySelectorAll(".piano > *").forEach((element) => {
  element.addEventListener("pointerdown", (event) => {
    PianoKeyboard.press(event);

    const target = event.target as HTMLDivElement;
    const key = target.id;

    if (!happy_birthday.pianoMap[key]?.includes(tracker)) return;

    if (trackerFunction(tracker)) tracker++;
  });

  element.addEventListener("pointerup", (event) => {
    PianoKeyboard.release(event);

    const target = event.target as HTMLDivElement;
    const key = target.id;

    if (happy_birthday.pianoMap[key]?.includes(tracker)) {
      target.style.backgroundColor = red;
      return;
    }
  });
});
