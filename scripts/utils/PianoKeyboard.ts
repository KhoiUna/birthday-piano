export default class PianoKeyboard {
  static play(event: Event) {
    const target = event.target as HTMLDivElement;
    const key = target.id;

    // @ts-ignore
    const sound = createjs.Sound.play(key); // play using id
    sound.volume = 0.05;
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
