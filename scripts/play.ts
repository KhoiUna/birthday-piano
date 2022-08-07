import { trackerFunction } from "./tracker";
import PianoKeyboard from "./utils/PianoKeyboard";
import happy_birthday from "../songs/happy_birthday.json";
import { red } from "./global";

// Load all audios
export const audioMap = {
  f: new Audio("/sound/F.m4a"),
  g: new Audio("/sound/G.m4a"),
  a: new Audio("/sound/A.m4a"),
  b: new Audio("/sound/B.m4a"),
  c: new Audio("/sound/C.m4a"),
  d: new Audio("/sound/D.m4a"),
  e: new Audio("/sound/E.m4a"),
  "f-high": new Audio("/sound/Fhigh.m4a"),
  "g-high": new Audio("/sound/Ghigh.m4a"),
  "a-high": new Audio("/sound/Ahigh.m4a"),
  "b-high": new Audio("/sound/Bhigh.m4a"),
  "black-key-one": new Audio("/sound/Fsharp.m4a"),
  "black-key-two": new Audio("/sound/Gsharp.m4a"),
  "black-key-three": new Audio("/sound/Asharp.m4a"),
  "black-key-four": new Audio("/sound/Csharp.m4a"),
  "black-key-five": new Audio("/sound/Dsharp.m4a"),
  "black-key-six": new Audio("/sound/Fsharphigh.m4a"),
  "black-key-seven": new Audio("/sound/Gsharphigh.m4a"),
  "black-key-eight": new Audio("/sound/Bhigh.m4a"),
};

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
