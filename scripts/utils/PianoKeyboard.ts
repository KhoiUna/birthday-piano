export default class PianoKeyboard {
  static currentAudio = new Audio();

  static play(event: Event) {
    const target = event.target as HTMLDivElement;
    const key = target.id;

    let audioFile: HTMLAudioElement;
    switch (key) {
      case "f":
        audioFile = new Audio("/sound/F.m4a");
        break;
      case "g":
        audioFile = new Audio("/sound/G.m4a");
        break;
      case "a":
        audioFile = new Audio("/sound/A.m4a");
        break;
      case "b":
        audioFile = new Audio("/sound/B.m4a");
        break;
      case "c":
        audioFile = new Audio("/sound/C.m4a");
        break;
      case "d":
        audioFile = new Audio("/sound/D.m4a");
        break;
      case "e":
        audioFile = new Audio("/sound/E.m4a");
        break;
      case "f-high":
        audioFile = new Audio("/sound/Fhigh.m4a");
        break;
      case "g-high":
        audioFile = new Audio("/sound/Ghigh.m4a");
        break;
      case "a-high":
        audioFile = new Audio("/sound/Ahigh.m4a");
        break;
      case "b-high":
        audioFile = new Audio("/sound/Bhigh.m4a");
        break;
      case "black-key-one":
        audioFile = new Audio("/sound/Fsharp.m4a");
        break;
      case "black-key-two":
        audioFile = new Audio("/sound/Gsharp.m4a");
        break;
      case "black-key-three":
        audioFile = new Audio("/sound/Asharp.m4a");
        break;
      case "black-key-four":
        audioFile = new Audio("/sound/Csharp.m4a");
        break;
      case "black-key-five":
        audioFile = new Audio("/sound/Dsharp.m4a");
        break;
      case "black-key-six":
        audioFile = new Audio("/sound/Fsharphigh.m4a");
        break;
      case "black-key-seven":
        audioFile = new Audio("/sound/Gsharphigh.m4a");
        break;
      case "black-key-eight":
        audioFile = new Audio("/sound/Bhigh.m4a");
        break;
      default:
        return;
    }

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
