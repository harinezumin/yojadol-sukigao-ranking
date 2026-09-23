　const idols = [
  {
    name: "Wonyoung",
    group: "IVE",
    image: "images/IMG_0942.jpeg"
  },
  {
    name: "Rei",
    group: "IVE",
    image: "images/IMG_0939.jpeg"
  },
  {
    name: "Leeseo",
    group: "IVE",
    image: "images/IMG_0943.jpeg"
  },
  {
    name: "Gaeul",
    group: "IVE",
    image: "images/IMG_0944.jpeg"
  },
  {
    name: "Liz",
    group: "IVE",
    image: "images/IMG_0945.jpeg"
  },
  {
    name: "Yujin",
    group: "IVE",
    image: "images/IMG_0946.jpeg"
  }
];


const startButton = document.getElementById("start-button");

const startScreen = document.getElementById("start-screen");
const matchScreen = document.getElementById("match-screen");

const imageLeft = document.getElementById("image-left");
const imageRight = document.getElementById("image-right");

const nameLeft = document.getElementById("name-left");
const nameRight = document.getElementById("name-right");

const groupLeft = document.getElementById("group-left");
const groupRight = document.getElementById("group-right");


startButton.addEventListener("click", function () {

  startScreen.classList.remove("active");
  matchScreen.classList.add("active");

  nameLeft.textContent = idols[0].name;
  groupLeft.textContent = idols[0].group;
  imageLeft.src = idols[0].image;

  nameRight.textContent = idols[1].name;
  groupRight.textContent = idols[1].group;
  imageRight.src = idols[1].image;

});
