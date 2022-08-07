// Register piano sounds to createjs.Sound.
// @ts-nocheck
createjs.Sound.registerSound("/sound/F.m4a", "f");
createjs.Sound.registerSound("/sound/G.m4a", "g");
createjs.Sound.registerSound("/sound/A.m4a", "a");
createjs.Sound.registerSound("/sound/B.m4a", "b");
createjs.Sound.registerSound("/sound/C.m4a", "c");
createjs.Sound.registerSound("/sound/D.m4a", "d");
createjs.Sound.registerSound("/sound/E.m4a", "e");
createjs.Sound.registerSound("/sound/Fhigh.m4a", "f-high");
createjs.Sound.registerSound("/sound/Ghigh.m4a", "g-high");
createjs.Sound.registerSound("/sound/Ahigh.m4a", "a-high");
createjs.Sound.registerSound("/sound/Bhigh.m4a", "b-high");
createjs.Sound.registerSound("/sound/Fsharp.m4a", "black-key-one");
createjs.Sound.registerSound("/sound/Gsharp.m4a", "black-key-two");
createjs.Sound.registerSound("/sound/Asharp.m4a", "black-key-three");
createjs.Sound.registerSound("/sound/Csharp.m4a", "black-key-four");
createjs.Sound.registerSound("/sound/Dsharp.m4a", "black-key-five");
createjs.Sound.registerSound("/sound/Fsharphigh.m4a", "black-key-six");
createjs.Sound.registerSound("/sound/Gsharphigh.m4a", "black-key-seven");
createjs.Sound.registerSound("/sound/Asharphigh.m4a", "black-key-eight");

export default class PianoKeyboard {
  static play(event: Event) {
    const target = event.target as HTMLDivElement;
    const key = target.id;

    const sound = createjs.Sound.play(key); // play using id
    sound.volume = 0.5;
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
