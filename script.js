/* ==================================================
   ♡ ヨジャドル好き顔メーカー
   ================================================== */


/* ==================================================
   ① アイドル登録
   ==================================================

   アイドルを追加するときは、ここに追加するだけ！

   name  = アイドルの名前
   group = グループ名
   image = imagesフォルダ内の写真の名前

   例：

   {
     name: "Wonyoung",
     group: "IVE",
     image: "images/wonyoung.jpg"
   }

================================================== */

const idols = [

  {
    name: "Wonyoung",
    group: "IVE",
    image: ""
  },

  {
    name: "Karina",
    group: "aespa",
    image: ""
  },

  {
    name: "Winter",
    group: "aespa",
    image: ""
  },

  {
    name: "Sana",
    group: "TWICE",
    image: ""
  },

  {
    name: "Tzuyu",
    group: "TWICE",
    image: ""
  },

  {
    name: "Yujin",
    group: "IVE",
    image: ""
  },

  {
    name: "Ningning",
    group: "aespa",
    image: ""
  },

  {
    name: "Minji",
    group: "NewJeans",
    image: ""
  },

  {
    name: "Hanni",
    group: "NewJeans",
    image: ""
  },

  {
    name: "Haerin",
    group: "NewJeans",
    image: ""
  },

  {
    name: "Danielle",
    group: "NewJeans",
    image: ""
  },

  {
    name: "Hyein",
    group: "NewJeans",
    image: ""
  }

];


/* ==================================================
   基本設定
================================================== */

const startScreen = document.getElementById("start-screen");
const matchScreen = document.getElementById("match-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");

const cardLeft = document.getElementById("card-left");
const cardRight = document.getElementById("card-right");

const imageLeft = document.getElementById("image-left");
const imageRight = document.getElementById("image-right");

const nameLeft = document.getElementById("name-left");
const nameRight = document.getElementById("name-right");

const groupLeft = document.getElementById("group-left");
const groupRight = document.getElementById("group-right");

const roundText = document.getElementById("round-text");
const matchText = document.getElementById("match-text");

const top9Grid = document.getElementById("top9-grid");

const shareButton = document.getElementById("share-button");
const saveButton = document.getElementById("save-button");
const retryButton = document.getElementById("retry-button");

const canvas = document.getElementById("share-canvas");

let currentRound = [];
let nextRound = [];

let currentMatchIndex = 0;

let currentLeft = null;
let currentRight = null;

let roundNumber = 1;

let eliminated = [];


/* ==================================================
   画面切り替え
================================================== */

function showScreen(screen) {

  document.querySelectorAll(".screen").forEach(element => {
    element.classList.remove("active");
  });

  screen.classList.add("active");
}


/* ==================================================
   シャッフル
================================================== */

function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] =
      [result[j], result[i]];
  }

  return result;
}


/* ==================================================
   START
================================================== */

startButton.addEventListener("click", startGame);


function startGame() {

  if (idols.length < 2) {

    alert("アイドルを2人以上登録してください♡");

    return;
  }

  const shuffled = shuffle(idols);

  currentRound = shuffled;

  nextRound = [];

  eliminated = [];

  roundNumber = 1;

  currentMatchIndex = 0;

  showScreen(matchScreen);

  prepareRound();
}


/* ==================================================
   ラウンド準備
================================================== */

function prepareRound() {

  currentMatchIndex = 0;

  nextRound = [];

  currentRound = shuffle(currentRound);

  /*
    奇数の場合は1人を自動的に次ラウンドへ。
  */

  if (currentRound.length % 2 === 1) {

    const bye =
      currentRound[currentRound.length - 1];

    nextRound.push(bye);

    currentRound =
      currentRound.slice(0, -1);
  }

  showNextMatch();
}


/* ==================================================
   次の対戦
================================================== */

function showNextMatch() {

  if (currentMatchIndex >= currentRound.length) {

    finishRound();

    return;
  }

  currentLeft =
    currentRound[currentMatchIndex];

  currentRight =
    currentRound[currentMatchIndex + 1];

  imageLeft.src = currentLeft.image;
  imageRight.src = currentRight.image;

  imageLeft.alt = currentLeft.name;
  imageRight.alt = currentRight.name;

  nameLeft.textContent =
    currentLeft.name;

  nameRight.textContent =
    currentRight.name;

  groupLeft.textContent =
    currentLeft.group;

  groupRight.textContent =
    currentRight.group;

  const totalMatches =
    Math.ceil(currentRound.length / 2);

  const currentMatch =
    Math.floor(currentMatchIndex / 2) + 1;

  roundText.textContent =
    `ROUND ${roundNumber}`;

  matchText.textContent =
    `${currentMatch} / ${totalMatches}`;
}


/* ==================================================
   左を選択
================================================== */

cardLeft.addEventListener("click", () => {

  chooseWinner(currentLeft, currentRight);

});


/* ==================================================
   右を選択
================================================== */

cardRight.addEventListener("click", () => {

  chooseWinner(currentRight, currentLeft);

});


/* ==================================================
   勝者決定
================================================== */

function chooseWinner(winner, loser) {

  nextRound.push(winner);

  eliminated.push(loser);

  currentMatchIndex += 2;

  showNextMatch();
}


/* ==================================================
   ラウンド終了
================================================== */

function finishRound() {

  /*
    1人だけになったら優勝者。
  */

  if (nextRound.length === 1) {

    const champion = nextRound[0];

    createFinalRanking(champion);

    return;
  }

  currentRound = nextRound;

  roundNumber++;

  prepareRound();
}


/* ==================================================
   TOP9作成
================================================== */

function createFinalRanking(champion) {

  /*
    完全な順位付けをするため、
    ここでは勝ち上がった順を基本にして
    敗退したアイドルも含めて順位候補を作る。

    championを1位にして、
    その後は各アイドルが何回勝ったかを計算。
  */

  const winCount = new Map();

  idols.forEach(idol => {
    winCount.set(idol.name, 0);
  });

  /*
    eliminated配列は敗退順なので、
    後に敗退した人ほど上位候補になる。
  */

  let rankCandidates = [
    champion,
    ...eliminated.reverse()
  ];

  /*
    重複削除
  */

  const unique = [];

  rankCandidates.forEach(idol => {

    if (!unique.some(x => x.name === idol.name)) {
      unique.push(idol);
    }

  });

  /*
    9人に満たない場合
  */

  idols.forEach(idol => {

    if (
      unique.length < 9 &&
      !unique.some(x => x.name === idol.name)
    ) {

      unique.push(idol);

    }

  });

  const top9 = unique.slice(0, 9);

  showResult(top9);
}


/* ==================================================
   結果表示
================================================== */

function showResult(top9) {

  showScreen(resultScreen);

  top9Grid.innerHTML = "";

  top9.forEach((idol, index) => {

    const item =
      document.createElement("div");

    item.className = "top9-item";

    const image =
      document.createElement("img");

    image.src = idol.image;

    image.alt = idol.name;

    const rank =
      document.createElement("div");

    rank.className = "rank";

    rank.textContent =
      `#${index + 1}`;

    item.appendChild(image);

    item.appendChild(rank);

    top9Grid.appendChild(item);

  });

  window.currentTop9 = top9;
}


/* ==================================================
   結果画像を作成
================================================== */

async function createShareImage() {

  const top9 = window.currentTop9;

  if (!top9 || top9.length === 0) {
    return null;
  }

  const size = 1200;

  canvas.width = size;
  canvas.height = size;

  const ctx =
    canvas.getContext("2d");

  ctx.fillStyle = "#fff7fb";

  ctx.fillRect(
    0,
    0,
    size,
    size
  );

  const cellSize =
    390;

  const gap = 10;

  const startX = 15;

  const startY = 15;

  for (let i = 0; i < 9; i++) {

    const idol = top9[i];

    const row =
      Math.floor(i / 3);

    const col =
      i % 3;

    const x =
      startX +
      col * (cellSize + gap);

    const y =
      startY +
      row * (cellSize + gap);

    const image =
      await loadImage(idol.image);

    drawCoverImage(
      ctx,
      image,
      x,
      y,
      cellSize,
      cellSize
    );

    /*
      白い順位バッジ
    */

    ctx.fillStyle =
      "rgba(255,255,255,0.9)";

    ctx.beginPath();

    ctx.arc(
      x + 42,
      y + 42,
      27,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.fillStyle = "#6d5961";

    ctx.font =
      "bold 22px sans-serif";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText(
      `${i + 1}`,
      x + 42,
      y + 42
    );
  }

  return canvas.toDataURL(
    "image/png"
  );
}


/* ==================================================
   画像読み込み
================================================== */

function loadImage(src) {

  return new Promise((resolve, reject) => {

    const img =
      new Image();

    img.crossOrigin = "anonymous";

    img.onload = () => resolve(img);

    img.onerror = reject;

    img.src = src;

  });

}


/* ==================================================
   正方形トリミング
================================================== */

function drawCoverImage(
  ctx,
  image,
  x,
  y,
  width,
  height
) {

  const imageRatio =
    image.width / image.height;

  const boxRatio =
    width / height;

  let sourceWidth =
    image.width;

  let sourceHeight =
    image.height;

  let sourceX = 0;

  let sourceY = 0;

  if (imageRatio > boxRatio) {

    sourceWidth =
      image.height * boxRatio;

    sourceX =
      (image.width - sourceWidth) / 2;

  } else {

    sourceHeight =
      image.width / boxRatio;

    sourceY =
      (image.height - sourceHeight) / 2;
  }

  ctx.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    x,
    y,
    width,
    height
  );
}


/* ==================================================
   シェア
================================================== */

shareButton.addEventListener(
  "click",
  async () => {

    try {

      const dataUrl =
        await createShareImage();

      if (!dataUrl) return;

      /*
        Web Share API対応端末
      */

      const response =
        await fetch(dataUrl);

      const blob =
        await response.blob();

      const file =
        new File(
          [blob],
          "yojadol-top9.png",
          {
            type: "image/png"
          }
        );

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file]
        })
      ) {

        await navigator.share({
          title:
            "ヨジャドル好き顔メーカー ♡",

          text:
            "私のヨジャドル好き顔TOP9 ♡",

          files: [file]
        });

      } else {

        downloadImage(dataUrl);

      }

    } catch (error) {

      console.log(error);

    }

  }
);


/* ==================================================
   保存
================================================== */

saveButton.addEventListener(
  "click",
  async () => {

    const dataUrl =
      await createShareImage();

    if (!dataUrl) return;

    downloadImage(dataUrl);

  }
);


function downloadImage(dataUrl) {

  const link =
    document.createElement("a");

  link.download =
    "yojadol-top9.png";

  link.href =
    dataUrl;

  link.click();

}


/* ==================================================
   もう一度
================================================== */

retryButton.addEventListener(
  "click",
  () => {

    showScreen(startScreen);

  }
);
