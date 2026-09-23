const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const matchScreen = document.getElementById("match-screen");

startButton.addEventListener("click", function () {
  startScreen.classList.remove("active");
  matchScreen.classList.add("active");
});
