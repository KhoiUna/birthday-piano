// Randomize body background color
export const randomTheme = () => {
  const color = [
    "#ff81d5",
    "yellow",
    "orange",
    "aquamarine",
    "rgb(82, 241, 42)",
  ];

  const choice = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[choice];
};
