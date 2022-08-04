import { trackerFunction } from "./tracker";
import PianoKeyboard from "./utils/PianoKeyboard";

let tracker = 1;

document.querySelectorAll(".piano > *").forEach((element) => {
  element.addEventListener("pointerdown", (event) => {
    PianoKeyboard.press(event);

    if (trackerFunction(tracker)) tracker++;
  });

  element.addEventListener("pointerup", (event) => {
    PianoKeyboard.release(event);
  });
});
