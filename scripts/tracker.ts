import { lightYellow, red } from "./global";
import Quote from "./utils/Quote";

// Declare variables
let theEnd = false;

// This function displays the quote and author
const displayQuote = () => {
  if (theEnd) return;

  const quoteObj = Quote.getRandomQuote();

  document.querySelector<HTMLDivElement>(
    "#gift"
  ).innerHTML = `" ${quoteObj.quote} "`;

  document.querySelector<HTMLDivElement>(
    "#author"
  ).innerHTML = `- ${quoteObj.author} -`;

  document.querySelector<HTMLDivElement>(
    ".quote-container"
  ).style.backgroundColor = lightYellow;

  document.querySelector<HTMLDivElement>("#quote-title").innerHTML =
    "ONCE MORE, HAPPY BIRTHDAY!";

  theEnd = true; // Prevent playing cheering sound & clicking on the quote again
};

// This function tracks the progress of the user
export const trackerFunction = (tracker: number) => {
  if (theEnd) return false;

  let correctKey = false; // Set to true if user presses the key matched with the lyric
  //
  //
  // 1st slide
  if (tracker === 1) {
    correctKey = true;

    // Switch slide from red G note to red G note for lyric 'HAP'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-two"
    ).style.backgroundColor = red;
  }

  if (tracker === 2) {
    correctKey = true;

    // Switch slide from red G note to red A note for lyric '-PY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-three"
    ).style.backgroundColor = red;

    document.getElementById("a").style.backgroundColor = red;
  }

  if (tracker === 3) {
    correctKey = true;

    // Switch slide from red A note to red G note for lyric 'BIRTH'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-four"
    ).style.backgroundColor = red;

    document.getElementById("g").style.backgroundColor = red;
  }

  if (tracker === 4) {
    correctKey = true;

    // Switch slide from red G note to red C note for lyric 'DAY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-five"
    ).style.backgroundColor = red;

    document.getElementById("c").style.backgroundColor = red;
  }

  if (tracker === 5) {
    correctKey = true;

    // Switch slide from red C note to red B note for lyric 'TO'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-one .lyric-box-six"
    ).style.backgroundColor = red;

    document.getElementById("b").style.backgroundColor = red;
  }

  if (tracker === 6) {
    correctKey = true;

    // Switch slide from red B note to red G note for lyric 'HAP' in next slide
    document.querySelector<HTMLDivElement>(".lyric-grid-one").remove();

    document.getElementById("g").style.backgroundColor = red;
  }

  //
  //
  // 2nd slide
  if (tracker === 7) {
    correctKey = true;

    // Switch slide from red G note to red G note for lyric 'HAP'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-two"
    ).style.backgroundColor = red;
  }

  if (tracker === 8) {
    correctKey = true;

    // Switch slide from red G note to red A note for lyric '-PY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-three"
    ).style.backgroundColor = red;

    document.getElementById("a").style.backgroundColor = red;
  }

  if (tracker === 9) {
    correctKey = true;

    // Switch slide from red A note to red G note for lyric 'BIRTH'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-four"
    ).style.backgroundColor = red;

    document.getElementById("g").style.backgroundColor = red;
  }

  if (tracker === 10) {
    correctKey = true;

    // Switch slide from red G note to red D note for lyric 'DAY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-five"
    ).style.backgroundColor = red;

    document.getElementById("d").style.backgroundColor = red;
  }

  if (tracker === 11) {
    correctKey = true;

    // Switch slide from red D note to red C note for lyric 'TO'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-two .lyric-box-six"
    ).style.backgroundColor = red;

    document.getElementById("c").style.backgroundColor = red;
  }

  if (tracker === 12) {
    correctKey = true;

    // Switch slide from red C note to red G note for lyric 'HAP' in next slide
    document.querySelector<HTMLDivElement>(".lyric-grid-two").remove();

    document.getElementById("g").style.backgroundColor = red;
  }

  //
  //
  // 3rd slide
  if (tracker === 13) {
    correctKey = true;

    // Switch slide from red G note to red G note for lyric 'HAP'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-two"
    ).style.backgroundColor = red;
  }

  if (tracker === 14) {
    correctKey = true;

    // Switch slide from red G note to  G-high note for lyric '-PY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-three"
    ).style.backgroundColor = red;

    document.getElementById("g-high").style.backgroundColor = red;
  }

  if (tracker === 15) {
    correctKey = true;

    // Switch slide from red G-high note to red E note for lyric 'BIRTH'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-four"
    ).style.backgroundColor = red;

    document.getElementById("e").style.backgroundColor = red;
  }

  if (tracker === 16) {
    correctKey = true;

    // Switch slide from red E note to red C note for lyric 'DAY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-five"
    ).style.backgroundColor = red;

    document.getElementById("c").style.backgroundColor = red;
  }

  if (tracker === 17) {
    correctKey = true;

    // Switch slide from red C note to red C note for lyric 'HAP'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-six"
    ).style.backgroundColor = red;
  }

  if (tracker === 18) {
    correctKey = true;

    // Switch slide from red C note to red B note for lyric '-PY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-six"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-seven"
    ).style.backgroundColor = red;

    document.getElementById("b").style.backgroundColor = red;
  }

  if (tracker === 19) {
    correctKey = true;

    // Switch slide from red B note to red A note for lyric 'BIRTH'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-seven"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-three .lyric-box-eight"
    ).style.backgroundColor = red;

    document.getElementById("a").style.backgroundColor = red;
  }

  if (tracker === 20) {
    correctKey = true;

    // Switch slide from red A note to red F-high note for lyric 'HAP' in next slide
    document.querySelector<HTMLDivElement>(".lyric-grid-three").remove();

    document.getElementById("f-high").style.backgroundColor = red;
  }

  //
  //
  // 4th slide
  if (tracker === 21) {
    correctKey = true;

    // Switch slide from red F-high note to red F-high note for lyric 'HAP'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-two"
    ).style.backgroundColor = red;
  }

  if (tracker === 22) {
    correctKey = true;

    // Switch slide from red F-high note to E note for lyric '-PY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-three"
    ).style.backgroundColor = red;

    document.getElementById("e").style.backgroundColor = red;
  }

  if (tracker === 23) {
    correctKey = true;

    // Switch slide from red E note to red C note for lyric 'BIRTH'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-four"
    ).style.backgroundColor = red;

    document.getElementById("c").style.backgroundColor = red;
  }

  if (tracker === 24) {
    correctKey = true;

    // Switch slide from red C note to red D note for lyric 'DAY'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-five"
    ).style.backgroundColor = red;

    document.getElementById("d").style.backgroundColor = red;
  }

  if (tracker === 25) {
    correctKey = true;

    // Switch slide from red D note to red C note for lyric 'TO'
    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-five"
    )!.style.backgroundColor = "silver";

    document.querySelector<HTMLDivElement>(
      ".lyric-grid-four .lyric-box-six"
    )!.style.backgroundColor = red;

    document.querySelector<HTMLDivElement>("#c")!.style.backgroundColor = red;
  }

  if (tracker === 26) {
    //Finish game
    if (
      document.querySelector<HTMLDivElement>(".lyric-grid-four") &&
      document.querySelector<HTMLHeadingElement>(".lyric-title")
    ) {
      document.querySelector<HTMLDivElement>(".lyric-grid-four").remove();
      document.querySelector<HTMLHeadingElement>(".lyric-title").remove();
    }

    document.querySelector<HTMLDivElement>(".quote-container").style.display =
      "block";
    document.querySelector<HTMLDivElement>("footer").style.padding = "3%";

    // Play Cheering sound
    // @ts-ignore
    const sound = createjs.Sound.play("cheering"); // play using id
    sound.volume = 0.5;

    // Show quote
    document.querySelector("#gift").addEventListener("click", displayQuote);
  }

  return correctKey;
};
