import { trackerFunction } from "./tracker";
import PianoKeyboard from "./utils/PianoKeyboard";
import happy_birthday from "../songs/happy_birthday.json";
import { red } from "./global";

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
