//Initial
//Slide One
document.querySelector(".lyric-grid-one .lyric-box-one").style.backgroundColor =
  "rgb(240, 80, 80)";
document.getElementById("g").style.backgroundColor = "rgb(240, 80, 80)";

//Slide Two
document.querySelector(".lyric-grid-two .lyric-box-one").style.backgroundColor =
  "rgb(240, 80, 80)";

//Slide Three
document.querySelector(
  ".lyric-grid-three .lyric-box-one"
).style.backgroundColor = "rgb(240, 80, 80)";

//Slide Four
document.querySelector(
  ".lyric-grid-four .lyric-box-one"
).style.backgroundColor = "rgb(240, 80, 80)";

//Quote generator function
const authorArr = [
  "Mark Twain",
  "Elon Musk",
  "Dale Carnegie",
  "Oprah Winfrey",
  "Helen Keller",
  "Sheryl Sandberg",
  "Mother Teresa",
  "Steve Jobs",
];
const quoteArr = [
  "The secret of getting ahead is getting started.",
  "When something is important enough, you do it even if the odds are not in your favor.",
  "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
  "I don't believe in failure. It is not failure if you enjoyed the process.",
  "Optimism is the faith that leads to achievement.",
  "Done is better than perfect.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "Innovation distinguishes between a leader and a follower.",
];
const quoteGenerator = () => {
  let finalArr = [];
  let random = Math.floor(Math.random() * authorArr.length);
  finalArr.push(quoteArr[random], authorArr[random]);
  return finalArr;
};
///
///
///
//Tracking function for slide One
const trackerOne = () => {
  if (firstTracker === 1) {
    //From red G note to red G note for lyric HAP
    document.querySelector(
      ".lyric-grid-one .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-one .lyric-box-two"
    ).style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (firstTracker === 2) {
    //From red G note to red A note for lyric -PY
    document.querySelector(
      ".lyric-grid-one .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-one .lyric-box-three"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("a").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (firstTracker === 3) {
    //From red A note to red G note for lyric BIRTH
    document.querySelector(
      ".lyric-grid-one .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-one .lyric-box-four"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("g").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (firstTracker === 4) {
    //From red G note to red C note for lyric DAY
    document.querySelector(
      ".lyric-grid-one .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-one .lyric-box-five"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("c").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (firstTracker === 5) {
    //From red C note to red B note for lyric TO
    document.querySelector(
      ".lyric-grid-one .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-one .lyric-box-six"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("b").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (firstTracker === 6) {
    //From red B note to red G note for lyric HAP in next slide
    document.querySelector(".lyric-grid-one").style.display = "none";

    document.getElementById("g").style.backgroundColor = "rgb(240, 80, 80)";
  }
};

///
///
///
///
//Tracking function for slide Two
const trackerTwo = () => {
  if (secondTracker === 7) {
    //From red G note to red G note for lyric HAP
    document.querySelector(
      ".lyric-grid-two .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-two .lyric-box-two"
    ).style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (secondTracker === 8) {
    //From red G note to red A note for lyric -PY
    document.querySelector(
      ".lyric-grid-two .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-two .lyric-box-three"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("a").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (secondTracker === 9) {
    //From red A note to red G note for lyric BIRTH
    document.querySelector(
      ".lyric-grid-two .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-two .lyric-box-four"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("g").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (secondTracker === 10) {
    //From red G note to red D note for lyric DAY
    document.querySelector(
      ".lyric-grid-two .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-two .lyric-box-five"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("d").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (secondTracker === 11) {
    //From red D note to red C note for lyric TO
    document.querySelector(
      ".lyric-grid-two .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-two .lyric-box-six"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("c").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (secondTracker === 12) {
    //From red C note to red G note for lyric HAP in next slide
    document.querySelector(".lyric-grid-two").style.display = "none";

    document.getElementById("g").style.backgroundColor = "rgb(240, 80, 80)";
  }
};

///
///
///
///
//Tracking function for slide Three
const trackerThree = () => {
  if (thirdTracker === 13) {
    //From red G note to red G note for lyric HAP
    document.querySelector(
      ".lyric-grid-three .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-two"
    ).style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (thirdTracker === 14) {
    //From red G note to  G-high note for lyric -PY
    document.querySelector(
      ".lyric-grid-three .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-three"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("g-high").style.backgroundColor =
      "rgb(240, 80, 80)";
  }

  if (thirdTracker === 15) {
    //From red G-high note to red E note for lyric BIRTH
    document.querySelector(
      ".lyric-grid-three .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-four"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("e").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (thirdTracker === 16) {
    //From red E note to red C note for lyric DAY
    document.querySelector(
      ".lyric-grid-three .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-five"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("c").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (thirdTracker === 17) {
    //From red C note to red C note for lyric HAP
    document.querySelector(
      ".lyric-grid-three .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-six"
    ).style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (thirdTracker === 18) {
    //From red C note to red B note for lyric -PY
    document.querySelector(
      ".lyric-grid-three .lyric-box-six"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-seven"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("b").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (thirdTracker === 19) {
    //From red B note to red A note for lyric BIRTH
    document.querySelector(
      ".lyric-grid-three .lyric-box-seven"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-three .lyric-box-eight"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("a").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (thirdTracker === 20) {
    //From red A note to red F-high note for lyric HAP in next slide
    document.querySelector(".lyric-grid-three").style.display = "none";

    document.getElementById("f-high").style.backgroundColor =
      "rgb(240, 80, 80)";
  }
};

///
///
///
///
//Tracking function for slide Four
const trackerFour = () => {
  if (fourthTracker === 21) {
    //From red F-high note to red F-high note for lyric HAP
    document.querySelector(
      ".lyric-grid-four .lyric-box-one"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-four .lyric-box-two"
    ).style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (fourthTracker === 22) {
    //From red F-high note to E note for lyric -PY
    document.querySelector(
      ".lyric-grid-four .lyric-box-two"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-four .lyric-box-three"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("e").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (fourthTracker === 23) {
    //From red E note to red C note for lyric BIRTH
    document.querySelector(
      ".lyric-grid-four .lyric-box-three"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-four .lyric-box-four"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("c").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (fourthTracker === 24) {
    //From red C note to red D note for lyric DAY
    document.querySelector(
      ".lyric-grid-four .lyric-box-four"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-four .lyric-box-five"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("d").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (fourthTracker === 25) {
    //From red D note to red C note for lyric TO
    document.querySelector(
      ".lyric-grid-four .lyric-box-five"
    ).style.backgroundColor = "silver";

    document.querySelector(
      ".lyric-grid-four .lyric-box-six"
    ).style.backgroundColor = "rgb(240, 80, 80)";

    document.getElementById("c").style.backgroundColor = "rgb(240, 80, 80)";
  }

  if (fourthTracker === 26) {
    //Finish game: change lyric box, avatar, add Cheering sound
    document.querySelector(".lyric-title").style.display = "none";
    document.querySelector(".quote-container").style.display = "block";
    document.querySelector("footer").style.padding = "3%";

    document.getElementById("avatar").src = "./img/blow.jpg";

    cheerSound();
  }
};

//JQuery to generate a quote
$(function () {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();

  if (month === 6 && date === 7) {
    $("#gift").click(() => {
      document.querySelector("#gift").innerHTML =
        "'This link is magical!'<br>-Khoi-";
      document.querySelector("#author").innerHTML =
        "<a href='https://www.dell.com/en-us/shop/dell-laptops/new-inspiron-15-7000-laptop/spd/inspiron-15-7591-laptop?gacd=9694607-24082147-5744497-272708580-132331255&dgc=&dclid=CLScyOLXk-oCFYPClAkd-VECUQ' target='_blank'>Click this link to see your present!</a>";
      document.querySelector(".quote-container").style.backgroundColor =
        "rgb(255, 255, 154)";
      document.querySelector(".quote-box").style.backgroundColor = "yellow";
      document.querySelector("#quote-title").innerHTML = "Your quote";
    });
  } else if (month === 6 && date === 17) {
    $("#gift").click(() => {
      document.querySelector("#gift").innerHTML =
        "Chúc mẹ sinh nhật vui vẻ, mạnh khỏe và hạnh phúc. Cảm ơn mẹ đã chăm lo cho con!";
      document.querySelector("#author").innerHTML = "-Nguyễn Tuấn Khôi-";
      document.querySelector(".quote-container").style.backgroundColor =
        "rgb(255, 255, 154)";
      document.querySelector(".quote-box").style.backgroundColor = "yellow";
      document.querySelector("#quote-title").innerHTML =
        "CHÚC MỪNG SINH NHẬT MẸ!";
    });
  } else {
    $("#gift").click(() => {
      const finalArr = quoteGenerator();
      document.querySelector("#gift").innerHTML = `" ${finalArr[0]} "`;
      document.querySelector("#author").innerHTML = `- ${finalArr[1]} -`;
      document.querySelector(".quote-container").style.backgroundColor =
        "rgb(255, 255, 154)";
      document.querySelector(".quote-box").style.backgroundColor = "yellow";
      document.querySelector("#quote-title").innerHTML =
        "ONCE MORE, HAPPY BIRTHDAY!";
    });
  }
});
