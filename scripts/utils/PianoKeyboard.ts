import { audioMap } from "../play";

export default class PianoKeyboard {
  static currentAudio = new Audio();

  static play(event: Event) {
    const target = event.target as HTMLDivElement;
    const key = target.id;

    const audioFile = audioMap[key];

    this.currentAudio = audioFile;
    this.currentAudio.load();
    this.currentAudio.play();
    this.currentAudio.volume = 1;
  }

  //Change keyboard's color functions
  static press(event: Event) {
    const target = event.target as HTMLDivElement;
    const key = target.id;

    // If the key is one of the black keys, becasue black keys have longer id names
    if (key.length > 6) {
      target.style.borderColor = "silver";
    }

    target.style.backgroundColor = "silver";
    this.play(event);
  }

  static release(event: Event) {
    this.currentAudio.pause(); // stop the previous sound

    const target = event.target as HTMLDivElement;
    const key = target.id;
    // If the key is one of the black keys, becasue black keys have longer id names
    if (key.length > 6) {
      target.style.backgroundColor = "black";
      target.style.borderColor = "black";
    } else {
      target.style.backgroundColor = "white";
      target.style.borderColor = "black";
    }
  }
}
