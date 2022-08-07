export default class PianoKeyboard {
  static currentAudio = new Audio();

  static play(event: Event) {
    const target = event.target as HTMLDivElement;
    const key = target.id;

    let audioFile: HTMLAudioElement;
    switch (key) {
      case "f":
        audioFile = new Audio("/ogg/F.ogg");
        break;
      case "g":
        audioFile = new Audio("/ogg/G.ogg");
        break;
      case "a":
        audioFile = new Audio("/ogg/A.ogg");
        break;
      case "b":
        audioFile = new Audio("/ogg/B.ogg");
        break;
      case "c":
        audioFile = new Audio("/ogg/C.ogg");
        break;
      case "d":
        audioFile = new Audio("/ogg/D.ogg");
        break;
      case "e":
        audioFile = new Audio("/ogg/E.ogg");
        break;
      case "f-high":
        audioFile = new Audio("/ogg/Fhigh.ogg");
        break;
      case "g-high":
        audioFile = new Audio("/ogg/Ghigh.ogg");
        break;
      case "a-high":
        audioFile = new Audio("/ogg/Ahigh.ogg");
        break;
      case "b-high":
        audioFile = new Audio("/ogg/Bhigh.ogg");
        break;
      case "black-key-one":
        audioFile = new Audio("/ogg/Fsharp.ogg");
        break;
      case "black-key-two":
        audioFile = new Audio("/ogg/Gsharp.ogg");
        break;
      case "black-key-three":
        audioFile = new Audio("/ogg/Asharp.ogg");
        break;
      case "black-key-four":
        audioFile = new Audio("/ogg/Csharp.ogg");
        break;
      case "black-key-five":
        audioFile = new Audio("/ogg/Dsharp.ogg");
        break;
      case "black-key-six":
        audioFile = new Audio("/ogg/Fsharphigh.ogg");
        break;
      case "black-key-seven":
        audioFile = new Audio("/ogg/Gsharphigh.ogg");
        break;
      case "black-key-eight":
        audioFile = new Audio("/ogg/Bhigh.ogg");
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
