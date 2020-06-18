//Hide .head-container
const headContainer = document.querySelector(".head-container");
headContainer.style.visibility = "hidden";

//Hide avatar:
const avatar = document.querySelector("#avatar");
avatar.style.visibility = "hidden";

//Function to get player name
const showName = () => {
  let name = document.getElementById("player-name").value;
  document.getElementById("name").innerHTML = "~ " + name.toUpperCase() + " ~";
};

//Add function to button:
$(function () {
  $("#next").click(() => {
    showName();
    $("#intro-name").hide("slow");
    $("#intro-instruction").show("slow");
  });

  $("#play").click(() => {
    $(".intro-popup").fadeOut("slow");
    headContainer.style.visibility = "visible";
    avatar.style.visibility = "visible";
  });
});
