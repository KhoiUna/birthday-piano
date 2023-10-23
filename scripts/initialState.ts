import { red } from "./global";
import { parseParam } from "./helpers/parseParam";
import { randomTheme } from "./helpers/randomTheme";
import Wish from "./utils/Wish";
import khoiAvatar from "../img/avatar.webp";

// Declare elements
const mainElement = document.querySelector("main");
mainElement.style.display = "none";

const loaderElement = document.querySelector<HTMLDivElement>("#loader");

// Set initial states of
// 1st slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-one .lyric-box-one"
).style.backgroundColor = red;
document.getElementById("g").style.backgroundColor = red;

// 2nd slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-two .lyric-box-one"
).style.backgroundColor = red;

// 3rd slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-three .lyric-box-one"
).style.backgroundColor = red;

// 4th slide
document.querySelector<HTMLDivElement>(
  ".lyric-grid-four .lyric-box-one"
).style.backgroundColor = red;

// Random background color
randomTheme();

// Function to load sound
const loadSound = () => {
  // Register piano sounds to createjs.Sound.
  // @ts-ignore
  createjs.Sound.registerSound("/sound/F.m4a", "f");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/G.m4a", "g");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/A.m4a", "a");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/B.m4a", "b");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/C.m4a", "c");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/D.m4a", "d");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/E.m4a", "e");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Fhigh.m4a", "f-high");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Ghigh.m4a", "g-high");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Ahigh.m4a", "a-high");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Bhigh.m4a", "b-high");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Fsharp.m4a", "black-key-one");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Gsharp.m4a", "black-key-two");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Asharp.m4a", "black-key-three");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Csharp.m4a", "black-key-four");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Dsharp.m4a", "black-key-five");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Fsharphigh.m4a", "black-key-six");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Gsharphigh.m4a", "black-key-seven");
  // @ts-ignore
  createjs.Sound.registerSound("/sound/Asharphigh.m4a", "black-key-eight");

  // Register cheering sound to createjs.Sound.
  // @ts-ignore
  createjs.Sound.registerSound("/sound/cheering.mp3", "cheering");
};

// Set initial states of wishText
export const wish = { wishText: "", fromUser: "" };

window.addEventListener("load", async () => {
  loadSound();

  const idParam = parseParam("id");
  // If there's no idParam found in the URL, show Khoi Nguyen's avatar
  if (!idParam) {
    mainElement.style.display = "block";
    loaderElement.style.display = "none";

    document.querySelector<HTMLSpanElement>("#from-user").innerText =
      "Khoi Nguyen";
    document.querySelector<HTMLSpanElement>("#to-user").innerText = "";

    document.querySelector<HTMLImageElement>("#avatar").src = khoiAvatar;
    document.querySelector<HTMLImageElement>("#avatar").alt =
      "Khoi Nguyen's avatar";
    return;
  }

  // Load wish and set initial states of wish
  const response = await Wish.fetchWish(idParam);

  if (response.error) {
    loaderElement.remove();
    mainElement.style.display = "block";
    mainElement.innerHTML = `<h1 style="margin: 2rem">${response.error}</h1>`;
    return;
  }

  loaderElement.remove();
  mainElement.style.display = "block";
  const {
    date_of_birth,
    from_user,
    image_url,
    to_user,
    wish_text,
    allow_to_play_immediately,
  } = response.success;

  wish.fromUser = from_user;
  wish.wishText = wish_text;

  document.querySelector<HTMLSpanElement>("#from-user").innerText = from_user;
  document.querySelector<HTMLSpanElement>("#to-user").innerText =
    ", " + to_user;

  // If it is not birthday yet, show message
  const dateOfBirth = new Date(new Date(date_of_birth).toLocaleString());
  const daysDifference = Math.round(
    (dateOfBirth.getTime() - new Date().getTime()) / 86400000
  );
  if (daysDifference > 0) {
    mainElement.innerHTML = `<h1 style="margin: 2rem">${daysDifference} days till your birthday! You cannot see it yet!</h1>`;
    return;
  }

  document.querySelector<HTMLImageElement>("#avatar").src = image_url;
  document.querySelector<HTMLImageElement>("#avatar").alt =
    from_user + "'s avatar";
});
