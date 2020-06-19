//Hide .head-container
const headContainer = document.querySelector(".head-container");
headContainer.style.visibility = "hidden";

//Hide avatar:
const avatar = document.querySelector("#avatar");
avatar.style.visibility = "hidden";

//Hide lyric-grid-container
const lyric = document.querySelector(".lyric-grid-container");
lyric.style.visibility = "hidden";

const nextButton = document.querySelector("#next");
const playButton = document.querySelector("#play");
const warning = document.querySelector("#warning");

//Function to check input name
const checkName = () => {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";
  let arr = [];
  let name = document.getElementById("player-name").value;
  name = name.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    arr.push(alphabet[i]);
  }

  let letter = 0;
  while (letter < name.length) {
    if (arr.includes(name[letter])) {
      letter++;
    } else {
      return false;
    }
  }
  return true;
};

const checkEmpty = () => {
  let name = document.getElementById("player-name").value;
  if (name.length === 0) {
    return false;
  }
};

//Function to get player name
const showName = () => {
  let name = document.getElementById("player-name").value;
  document.getElementById("name").innerHTML =
    "WISH " + name.toUpperCase() + " THE BEST WISHES!";
};

//Body backgroundColor theme
const color = ["#ff81d5", "yellow", "orange", "aquamarine", "rgb(82, 241, 42)"];
const randomTheme = () => {
  const choice = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[choice];
  switch (color[choice]) {
    case "#ff81d5": //pink
      nextButton.style.backgroundColor = "rgb(255, 86, 241)";
      playButton.style.backgroundColor = "rgb(255, 86, 241)";
      headContainer.style.backgroundColor = "rgb(255, 86, 241)";
      break;
    case "yellow":
      nextButton.style.backgroundColor = "rgb(247, 247, 82)";
      playButton.style.backgroundColor = "rgb(247, 247, 82)";
      headContainer.style.backgroundColor = "rgb(247, 247, 82)";
      break;
    case "orange":
      nextButton.style.backgroundColor = "rgb(245, 183, 68)";
      playButton.style.backgroundColor = "rgb(245, 183, 68)";
      headContainer.style.backgroundColor = "rgb(245, 183, 68)";
      break;
    case "aquamarine":
      nextButton.style.backgroundColor = "aqua";
      playButton.style.backgroundColor = "aqua";
      headContainer.style.backgroundColor = "aqua";
      break;
    default:
      nextButton.style.backgroundColor = "rgba(10, 236, 10, 0.829)";
      playButton.style.backgroundColor = "rgba(10, 236, 10, 0.829)";
      headContainer.style.backgroundColor = "rgba(10, 236, 10, 0.829)";
      break;
  }
};

//Add function to button:
$(function () {
  randomTheme();

  $("#submit").click(() => {
    if (checkEmpty() === false) {
      warning.style.color = "red";
      warning.innerHTML = "*Please enter your name";
      nextButton.disabled = true;
    } else {
      if (checkName()) {
        warning.style.color = "rgb(82, 241, 42)";
        warning.innerHTML = "That's a beautiful name!";
        nextButton.disabled = false;
      } else {
        warning.style.color = "red";
        warning.innerHTML = "Sorry! It doesn't look like a name!";
        nextButton.disabled = true;
      }
    }
  });

  $("#next").click(() => {
    showName();
    $("#intro-name").hide("slow");
    $("#intro-instruction").show("slow");
  });

  $("#play").click(() => {
    $(".intro-popup").fadeOut("slow");
    headContainer.style.visibility = "visible";
    avatar.style.visibility = "visible";
    lyric.style.visibility = "visible";
  });
});
