const f = document.getElementById("f");
const change = () => {
  document.getElementById("f").style.backgroundColor = "silver";
};
const up = () => {
  f.style.backgroundColor = "white";
};
f.onmousedown = () => {
  change();
};
f.onmouseup = () => {
  up();
};
