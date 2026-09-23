/* ==================================================
   ♡ ヨジャドル好き顔メーカー
   ================================================== */


/* ==================================================
   ① アイドル登録
   ================================================== */

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


/* ==================================================
   ② HTMLの要素を取得
   ================================================== */

const startScreen =
  document.getElementById("start-screen");

const matchScreen =
  document.getElementById("match-screen");

const resultScreen =
  document.getElementById("result-screen");

const startButton =
  document.getElementById("start-button");

const cardLeft =
  document.getElementById("card-left");

const cardRight =
  document.getElementById("card-right");

const imageLeft =
  document.getElementById("image-left");

const imageRight =
  document.getElementById("image-right");

const nameLeft =
  document.getElementById("name-left");

const nameRight =
  document.getElementById("name-right");

const groupLeft =
  document.getElementById("group-left");

const groupRight =
  document.getElementById("group-right");

const roundText =
  document.getElementById("round-text");

const matchText =
  document.getElementById("match-text");

const top9Grid =
  document.getElementById("top9-grid");

const retryButton =
  document.getElementById("retry-button");


/* ==================================================
   ③ ゲーム用データ
   ================================================== */

let currentRound = [];

let nextRound = [];

let currentIndex = 0;

let leftIdol = null;

let rightIdol = null;

let roundNumber = 1;


/* ==================================================
   ④ 画面切り替え
   ================================================== */

function showScreen(screen) {

  startScreen.classList.remove("active");

  matchScreen.classList.remove("active");

  resultScreen.classList.remove("active");

  screen.classList.add("active");
}


/* ==================================================
   ⑤ シャッフル
   ================================================== */

function shuffle(array) {

  const copy = [...array];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const random =
      Math.floor(Math.random() * (i + 1));

    [
      copy[i],
      copy[random]
    ] = [
      copy[random],
      copy[i]
    ];
  }

  return copy;
}


/* ==================================================
   ⑥ START
   ================================================== */

startButton.addEventListener(
  "click",
  startGame
);


function startGame() {

  if (idols.length < 2) {

    alert(
      "アイドルを2人以上登録してください♡"
    );

    return;
  }

  currentRound =
    shuffle(idols);

  nextRound = [];

  currentIndex = 0;

  roundNumber = 1;

  showScreen(matchScreen);

  prepareRound();
}


/* ==================================================
   ⑦ ラウンド準備
   ================================================== */

function prepareRound() {

  currentIndex = 0;

  nextRound = [];

  currentRound =
    shuffle(currentRound);

  showNextMatch();
}


/* ==================================================
   ⑧ 次の対戦を表示
   ================================================== */

function showNextMatch() {

  /*
    今のラウンドが終了したら
    次のラウンドへ
  */

  if (
    currentIndex >= currentRound.length
  ) {

    finishRound();

    return;
  }


  /*
    残りが1人なら
    その人は不戦勝
  */

  if (
    currentIndex ===
    currentRound.length - 1
  ) {

    nextRound.push(
      currentRound[currentIndex]
    );

    currentIndex++;

    showNextMatch();

    return;
  }


  /*
    対戦する2人
  */

  leftIdol =
    currentRound[currentIndex];

  rightIdol =
    currentRound[currentIndex + 1];


  /*
    写真
  */

  imageLeft.src =
    leftIdol.image;

  imageRight.src =
    rightIdol.image;


  /*
    名前
  */

  nameLeft.textContent =
    leftIdol.name;

  nameRight.textContent =
    rightIdol.name;


  /*
    グループ
  */

  groupLeft.textContent =
    leftIdol.group;

  groupRight.textContent =
    rightIdol.group;


  /*
    ラウンド表示
  */

  roundText.textContent =
    "ROUND " + roundNumber;


  /*
    試合数
  */

  const totalMatches =
    Math.ceil(
      currentRound.length / 2
    );

  const currentMatch =
    Math.floor(
      currentIndex / 2
    ) + 1;

  matchText.textContent =
    currentMatch +
    " / " +
    totalMatches;
}


/* ==================================================
   ⑨ 左を選ぶ
   ================================================== */

cardLeft.addEventListener(
  "click",
  function () {

    chooseWinner(
      leftIdol,
      rightIdol
    );

  }
);


/* ==================================================
   ⑩ 右を選ぶ
   ================================================== */

cardRight.addEventListener(
  "click",
  function () {

    chooseWinner(
      rightIdol,
      leftIdol
    );

  }
);


/* ==================================================
   ⑪ 勝者を決める
   ================================================== */

function chooseWinner(
  winner,
  loser
) {

  /*
    勝った人を次のラウンドへ
  */

  nextRound.push(winner);


  /*
    次の対戦へ
  */

  currentIndex += 2;

  showNextMatch();
}


/* ==================================================
   ⑫ ラウンド終了
   ================================================== */

function finishRound() {

  /*
    優勝者が決まった
  */

  if (nextRound.length === 1) {

    const champion =
      nextRound[0];

    showFinalResult(champion);

    return;
  }


  /*
    次のラウンドへ
  */

  currentRound =
    nextRound;

  roundNumber++;

  prepareRound();
}


/* ==================================================
   ⑬ 最終結果
   ================================================== */

function showFinalResult(champion) {

  /*
    今回はシンプルに、

    1位 = 優勝者

    2位以降 =
    トーナメントで最後まで
    残っていた順

    として表示する。
  */

  const ranking = [];

  ranking.push(champion);


  /*
    ここまでのラウンドで
    選ばれた人を追加
  */

  const remaining =
    idols.filter(
      idol =>
        idol.name !== champion.name
    );


  /*
    残りのアイドルをシャッフル
  */

  const shuffled =
    shuffle(remaining);


  ranking.push(...shuffled);


  /*
    最大9人
  */

  const top9 =
    ranking.slice(0, 9);


  displayResult(top9);
}


/* ==================================================
   ⑭ TOP9表示
   ================================================== */

function displayResult(top9) {

  showScreen(resultScreen);

  top9Grid.innerHTML = "";


  top9.forEach(
    function (idol, index) {

      const item =
        document.createElement("div");

      item.className =
        "top9-item";


      const image =
        document.createElement("img");

      image.src =
        idol.image;

      image.alt =
        idol.name;


      const rank =
        document.createElement("div");

      rank.className =
        "rank";

      rank.textContent =
        "#" + (index + 1);


      item.appendChild(image);

      item.appendChild(rank);

      top9Grid.appendChild(item);

    }
  );
}


/* ==================================================
   ⑮ もう一度遊ぶ
   ================================================== */

retryButton.addEventListener(
  "click",
  function () {

    showScreen(startScreen);

  }
);
