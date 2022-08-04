export default class PianoKeyboard {
  static audio = new Audio();

  static play(event) {
    const key = event.target.id;

    let audioFile = "";
    switch (key) {
      case "f":
        audioFile = "sound/F.m4a";
        break;
      case "g":
        audioFile = "sound/G.m4a";
        break;
      case "a":
        audioFile = "sound/A.m4a";
        break;
      case "b":
        audioFile = "sound/B.m4a";
        break;
      case "c":
        audioFile = "sound/C.m4a";
        break;
      case "d":
        audioFile = "sound/D.m4a";
        break;
      case "e":
        audioFile = "sound/E.m4a";
        break;
      case "f-high":
        audioFile = "sound/Fhigh.m4a";
        break;
      case "g-high":
        audioFile = "sound/Ghigh.m4a";
        break;
      case "a-high":
        audioFile = "sound/Ahigh.m4a";
        break;
      case "b-high":
        audioFile = "sound/Bhigh.m4a";
        break;
      case "black-key-one":
        audioFile = "sound/Fsharp.m4a";
        break;
      case "black-key-two":
        audioFile = "sound/Gsharp.m4a";
        break;
      case "black-key-three":
        audioFile = "sound/Asharp.m4a";
        break;
      case "black-key-four":
        audioFile = "sound/Csharp.m4a";
        break;
      case "black-key-five":
        audioFile = "sound/Dsharp.m4a";
        break;
      case "black-key-six":
        audioFile = "sound/Fsharphigh.m4a";
        break;
      case "black-key-seven":
        audioFile = "sound/Gsharphigh.m4a";
        break;
      case "black-key-eight":
        audioFile = "sound/Bhigh.m4a";
        break;
      default:
        return;
    }

    this.audio.src = audioFile;
    this.audio.load();
    this.audio.play();
    this.audio.volume = 1;
  }

  //Change keyboard's color functions
  static press(event) {
    event.target.style.backgroundColor = "silver";
    this.play(event);
  }

  static release(event) {
    this.audio.pause(); // stop the previous sound

    const key = event.target.id;
    // If the key is one of the black keys, becasue black keys have longer id names
    if (key.length > 6) {
      event.target.style.backgroundColor = "black";
      event.target.style.borderColor = "black";
    } else {
      event.target.style.backgroundColor = "white";
      event.target.style.borderColor = "black";
    }
  }
}
