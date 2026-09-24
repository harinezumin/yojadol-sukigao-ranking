/* ==================================================
   ♡ ヨジャドル好き顔メーカー
   ♡ グループ選抜 → トーナメント版
   ================================================== */


/* ==================================================
   アイドル登録
   ※画像番号は現在のものをそのまま使用
   ================================================== */

const idols = [
{
  name: "Mai",
  group: "izna",
  image: "IMG_1031.jpeg"
},
{
  name: "Jeemin",
  group: "izna",
  image: "IMG_1032.jpeg"
},
{
  name: "Koko",
  group: "izna",
  image: "IMG_1033.jpeg"
},
{
  name: "Sarang",
  group: "izna",
  image: "IMG_1034.jpeg"
},
{
  name: "Jungeun",
  group: "izna",
  image: "IMG_1035.jpeg"
},
{
  name: "Saebi",
  group: "izna",
  image: "IMG_1036.jpeg"
},
   {
  name: "Leeseol",
  group: "KiiiKiii",
  image: "IMG_1026.jpeg"
},
{
  name: "Sui",
  group: "KiiiKiii",
  image: "IMG_1027.jpeg"
},
{
  name: "Jiyu",
  group: "KiiiKiii",
  image: "IMG_1028.jpeg"
},
{
  name: "Haum",
  group: "KiiiKiii",
  image: "IMG_1029.jpeg"
},
{
  name: "Kya",
  group: "KiiiKiii",
  image: "IMG_1030.jpeg"
},

  {
    name: "Wonyoung",
    group: "IVE",
    image: "IMG_0942.jpeg"
  },

  {
    name: "Rei",
    group: "IVE",
    image: "IMG_0939.jpeg"
  },

  {
    name: "Leeseo",
    group: "IVE",
    image: "IMG_0943.jpeg"
  },

  {
    name: "Gaeul",
    group: "IVE",
    image: "IMG_0944.jpeg"
  },

  {
    name: "Liz",
    group: "IVE",
    image: "IMG_0945.jpeg"
  },

  {
    name: "Yujin",
    group: "IVE",
    image: "IMG_0946.jpeg"
  },

  {
    name: "Seoyeon",
    group: "tripleS",
    image: "IMG_0947.jpeg"
  },

  {
    name: "Hyerin",
    group: "tripleS",
    image: "IMG_0948.jpeg"
  },

  {
    name: "Jiwoo",
    group: "tripleS",
    image: "IMG_0949.jpeg"
  },

  {
    name: "Chaeyeon",
    group: "tripleS",
    image: "IMG_0950.jpeg"
  },

  {
    name: "Yooyeon",
    group: "tripleS",
    image: "IMG_0951.jpeg"
  },

  {
    name: "Soomin",
    group: "tripleS",
    image: "IMG_0952.jpeg"
  },

  {
    name: "Nakyoung",
    group: "tripleS",
    image: "IMG_0953.jpeg"
  },

  {
    name: "Yubin",
    group: "tripleS",
    image: "IMG_0954.jpeg"
  },

  {
    name: "Kaede",
    group: "tripleS",
    image: "IMG_0955.jpeg"
  },

  {
    name: "Dahyun",
    group: "tripleS",
    image: "IMG_0956.jpeg"
  },

  {
    name: "Kotone",
    group: "tripleS",
    image: "IMG_0957.jpeg"
  },

  {
    name: "Yeonji",
    group: "tripleS",
    image: "IMG_0958.jpeg"
  },

  {
    name: "Nien",
    group: "tripleS",
    image: "IMG_0959.jpeg"
  },

  {
    name: "Sohyun",
    group: "tripleS",
    image: "IMG_0960.jpeg"
  },

  {
    name: "Xinyu",
    group: "tripleS",
    image: "IMG_0961.jpeg"
  },

  {
    name: "Mayu",
    group: "tripleS",
    image: "IMG_0962.jpeg"
  },

  {
    name: "Lynn",
    group: "tripleS",
    image: "IMG_0963.jpeg"
  },

  {
    name: "Joobin",
    group: "tripleS",
    image: "IMG_0964.jpeg"
  },

  {
    name: "Hayeon",
    group: "tripleS",
    image: "IMG_0965.jpeg"
  },

  {
    name: "Shion",
    group: "tripleS",
    image: "IMG_0966.jpeg"
  },

  {
    name: "Chaewon",
    group: "tripleS",
    image: "IMG_0967.jpeg"
  },

  {
    name: "Sullin",
    group: "tripleS",
    image: "IMG_0968.jpeg"
  },

  {
    name: "Seoah",
    group: "tripleS",
    image: "IMG_0969.jpeg"
  },

  {
    name: "Jiyeon",
    group: "tripleS",
    image: "IMG_0970.jpeg"
  },

  {
    name: "Jiwoo",
    group: "Hearts2Hearts",
    image: "IMG_0975.jpeg"
  },

  {
    name: "Stella",
    group: "Hearts2Hearts",
    image: "IMG_0972.jpeg"
  },

  {
    name: "Ian",
    group: "Hearts2Hearts",
    image: "IMG_0977.jpeg"
  },

  {
    name: "Yuha",
    group: "Hearts2Hearts",
    image: "IMG_0978.jpeg"
  },

  {
    name: "Juun",
    group: "Hearts2Hearts",
    image: "IMG_0979.jpeg"
  },

  {
    name: "Carmen",
    group: "Hearts2Hearts",
    image: "IMG_0980.jpeg"
  },

  {
    name: "Ana",
    group: "Hearts2Hearts",
    image: "IMG_0981.jpeg"
  },

  {
    name: "Yeon",
    group: "Hearts2Hearts",
    image: "IMG_0982.jpeg"
  },

  {
    name: "Jia",
    group: "tuide",
    image: "IMG_0984.jpeg"
  },

  {
    name: "Seoyeon",
    group: "tuide",
    image: "IMG_0986.jpeg"
  },

  {
    name: "Seohee",
    group: "tuide",
    image: "IMG_0985.jpeg"
  },

  {
    name: "Elena",
    group: "tuide",
    image: "IMG_0987.jpeg"
  },

  {
    name: "Saki",
    group: "tuide",
    image: "IMG_0988.jpeg"
  },

  {
    name: "Seah",
    group: "tuide",
    image: "IMG_0989.jpeg"
  },

  {
    name: "Yi Hani",
    group: "tuide",
    image: "IMG_0990.jpeg"
  },

  {
    name: "Yeeun",
    group: "UNCHILD",
    image: "IMG_0991.jpeg"
  },

  {
    name: "Heekie",
    group: "UNCHILD",
    image: "IMG_0992.jpeg"
  },

  {
    name: "Tina",
    group: "UNCHILD",
    image: "IMG_0995.jpeg"
  },

  {
    name: "Ako",
    group: "UNCHILD",
    image: "IMG_0994.jpeg"
  },

  {
    name: "Evon",
    group: "UNCHILD",
    image: "IMG_0996.jpeg"
  },

  {
    name: "Haeun",
    group: "UNCHILD",
    image: "IMG_0997.jpeg"
  },

  {
    name: "Michi",
    group: "Atheart",
    image: "IMG_0998.jpeg"
  },

  {
    name: "Arin",
    group: "Atheart",
    image: "IMG_0999.jpeg"
  },

  {
    name: "Katelyn",
    group: "Atheart",
    image: "IMG_1001.jpeg"
  },

  {
    name: "Bome",
    group: "Atheart",
    image: "IMG_1002.jpeg"
  },

  {
    name: "Seohyeon",
    group: "Atheart",
    image: "IMG_1003.jpeg"
  },

  {
    name: "Aurora",
    group: "Atheart",
    image: "IMG_1004.jpeg"
  },

  {
    name: "Nahyun",
    group: "Atheart",
    image: "IMG_1005.jpeg"
  },

  {
    name: "Youngseo",
    group: "ALL DAY PROJECT",
    image: "IMG_1008.jpeg"
  },

  {
    name: "Bailey",
    group: "ALL DAY PROJECT",
    image: "IMG_1009.jpeg"
  },

  {
    name: "Annie",
    group: "ALL DAY PROJECT",
    image: "IMG_1010.jpeg"
  },

  {
    name: "Yihyun",
    group: "Baby Don't Cry",
    image: "IMG_1011.jpeg"
  },

  {
    name: "Kumi",
    group: "Baby Don't Cry",
    image: "IMG_1012.jpeg"
  },

  {
    name: "Mia",
    group: "Baby Don't Cry",
    image: "IMG_1013.jpeg"
  },

  {
    name: "Beni",
    group: "Baby Don't Cry",
    image: "IMG_1014.jpeg"
  },

  {
    name: "Hyerin",
    group: "Hitgs",
    image: "IMG_1015.jpeg"
  },

  {
    name: "Seohee",
    group: "Hitgs",
    image: "IMG_1016.jpeg"
  },

  {
    name: "Iyoo",
    group: "Hitgs",
    image: "IMG_1017.jpeg"
  },

  {
    name: "Seojin",
    group: "Hitgs",
    image: "IMG_1018.jpeg"
  },

  {
    name: "VV",
    group: "Hitgs",
    image: "IMG_1019.jpeg"
  },

  {
    name: "Hwayeon",
    group: "ifeye",
    image: "IMG_1020.jpeg"
  },

  {
    name: "Taerin",
    group: "ifeye",
    image: "IMG_1021.jpeg"
  },

  {
    name: "Rahee",
    group: "ifeye",
    image: "IMG_1022.jpeg"
  },

  {
    name: "Kasia",
    group: "ifeye",
    image: "IMG_1023.jpeg"
  },

  {
    name: "Meu",
    group: "ifeye",
    image: "IMG_1024.jpeg"
  },

  {
    name: "Sasha",
    group: "ifeye",
    image: "IMG_1025.jpeg"
  }

];

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 画面・ボタン取得
  // =========================

  const startScreen = document.getElementById("start-screen");
  const matchScreen = document.getElementById("match-screen");
  const resultScreen = document.getElementById("result-screen");

  const startButton = document.getElementById("start-button");
  const retryButton = document.getElementById("retry-button");

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


  // =========================
  // 画面切り替え
  // =========================

  function showScreen(screen) {

    [startScreen, matchScreen, resultScreen].forEach(s => {
      if (s) s.classList.remove("active");
    });

    if (screen) {
      screen.classList.add("active");
    }
  }


  // =========================
  // 並び替え
  // =========================

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }


  // =========================
  // グループ一覧
  // =========================

  const groups = [...new Set(idols.map(idol => idol.group))];


  // =========================
  // 選択画面を作る
  // =========================

  const originalStartChildren = [...startScreen.children];

  const originalStartDisplay = new Map();

  originalStartChildren.forEach(child => {
    originalStartDisplay.set(child, child.style.display);
  });


  const selectionRoot = document.createElement("div");

  selectionRoot.id = "idol-selection-root";

  selectionRoot.style.display = "none";
  selectionRoot.style.width = "100%";
  selectionRoot.style.boxSizing = "border-box";
  selectionRoot.style.padding = "20px";
  selectionRoot.style.overflowY = "auto";


  startScreen.appendChild(selectionRoot);


  // 選択画面用CSS

  const selectionStyle = document.createElement("style");

  selectionStyle.textContent = `

    #idol-selection-root {
      font-family: inherit;
      text-align: center;
    }

    .idol-select-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .idol-select-subtitle {
      font-size: 14px;
      opacity: 0.7;
      margin-bottom: 20px;
    }

    .idol-select-progress {
      font-size: 13px;
      margin-bottom: 15px;
      opacity: 0.65;
    }

    .idol-select-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 14px;
      width: 100%;
      max-width: 800px;
      margin: 0 auto 24px;
    }

    .idol-select-card {
      position: relative;
      border: 2px solid #eeeeee;
      border-radius: 18px;
      padding: 8px;
      background: white;
      cursor: pointer;
      transition: 0.2s;
      box-sizing: border-box;
    }

    .idol-select-card:hover {
      transform: translateY(-2px);
    }

    .idol-select-card.selected {
      border-color: #ff8fb1;
      box-shadow: 0 0 0 3px rgba(255,143,177,0.15);
      transform: translateY(-2px);
    }

    .idol-select-card img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 14px;
      display: block;
    }

    .idol-select-name {
      font-size: 14px;
      font-weight: 600;
      margin-top: 7px;
    }

    .idol-select-heart {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba(255,255,255,0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
    }

    .idol-select-card.selected .idol-select-heart {
      background: #ff8fb1;
      color: white;
    }

    .idol-select-button {
      border: none;
      border-radius: 999px;
      padding: 12px 28px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      background: #ff8fb1;
      color: white;
      margin: 4px;
    }

    .idol-select-button.secondary {
      background: #eeeeee;
      color: #555555;
    }

    .idol-summary-list {
      max-width: 700px;
      margin: 20px auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 12px;
    }

    .idol-summary-item {
      text-align: center;
      font-size: 13px;
    }

    .idol-summary-item img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
      display: block;
      margin: 0 auto 5px;
    }

    .idol-empty {
      margin: 30px 0;
      font-size: 14px;
      opacity: 0.7;
    }

  `;

  document.head.appendChild(selectionStyle);


  // =========================
  // 選択状態
  // =========================

  let selectedIdols = [];

  let currentGroupIndex = 0;


  // =========================
  // START
  // =========================

  startButton.addEventListener("click", () => {

    selectedIdols = [];
    currentGroupIndex = 0;

    // 元のSTART画面を隠す
    originalStartChildren.forEach(child => {
      child.style.display = "none";
    });

    selectionRoot.style.display = "block";

    // 念のためスクロール可能にする
    startScreen.style.overflow = "auto";

    showScreen(startScreen);

    showGroupSelection();

  });


  // =========================
  // グループ選択画面
  // =========================

  function showGroupSelection() {

    const groupName = groups[currentGroupIndex];

    const members = idols.filter(
      idol => idol.group === groupName
    );

    const selectedInThisGroup = new Set();


    selectionRoot.innerHTML = `

      <div class="idol-select-title">
        ${groupName}
      </div>

      <div class="idol-select-subtitle">
        好きなメンバーを何人でも選んでね ♡
      </div>

      <div class="idol-select-progress">
        ${currentGroupIndex + 1} / ${groups.length} グループ
      </div>

      <div class="idol-select-grid" id="current-idol-grid"></div>

      <button
        class="idol-select-button"
        id="next-group-button"
      >
        次へ ♡
      </button>

      <button
        class="idol-select-button secondary"
        id="skip-group-button"
      >
        スキップ
      </button>

    `;


    const grid = document.getElementById("current-idol-grid");


    // メンバーカード作成

    members.forEach(idol => {

      const card = document.createElement("div");

      card.className = "idol-select-card";

      card.innerHTML = `

        <img src="${idol.image}" alt="${idol.name}">

        <div class="idol-select-heart">
          ♡
        </div>

        <div class="idol-select-name">
          ${idol.name}
        </div>

      `;


      card.addEventListener("click", () => {

        if (selectedInThisGroup.has(idol)) {

          selectedInThisGroup.delete(idol);
          card.classList.remove("selected");

          card.querySelector(".idol-select-heart").textContent = "♡";

        } else {

          selectedInThisGroup.add(idol);
          card.classList.add("selected");

          card.querySelector(".idol-select-heart").textContent = "♥";

        }

      });


      grid.appendChild(card);

    });


    // 次へ

    document
      .getElementById("next-group-button")
      .addEventListener("click", () => {

        selectedInThisGroup.forEach(idol => {

          if (!selectedIdols.includes(idol)) {
            selectedIdols.push(idol);
          }

        });

        goToNextGroup();

      });


    // スキップ

    document
      .getElementById("skip-group-button")
      .addEventListener("click", () => {

        goToNextGroup();

      });

  }


  // =========================
  // 次のグループ
  // =========================

  function goToNextGroup() {

    currentGroupIndex++;

    if (currentGroupIndex < groups.length) {

      showGroupSelection();

    } else {

      showSelectionSummary();

    }

  }


  // =========================
  // 選択メンバー確認
  // =========================

  function showSelectionSummary() {

    if (selectedIdols.length === 0) {

      selectionRoot.innerHTML = `

        <div class="idol-select-title">
          まだ選んだメンバーがいないよ ♡
        </div>

        <div class="idol-empty">
          少なくとも1人選んでからトーナメントを始めてね！
        </div>

        <button
          class="idol-select-button"
          id="back-to-selection"
        >
          もう一度選ぶ
        </button>

      `;


      document
        .getElementById("back-to-selection")
        .addEventListener("click", () => {

          currentGroupIndex = 0;
          selectedIdols = [];

          showGroupSelection();

        });

      return;
    }


    selectionRoot.innerHTML = `

      <div class="idol-select-title">
        選んだメンバー ♡
      </div>

      <div class="idol-select-subtitle">
        ${selectedIdols.length}人がトーナメントに参加します
      </div>

      <div class="idol-summary-list" id="idol-summary-list"></div>

      <button
        class="idol-select-button"
        id="start-tournament-button"
      >
        トーナメント開始 ♡
      </button>

      <br>

      <button
        class="idol-select-button secondary"
        id="redo-selection-button"
      >
        選び直す
      </button>

    `;


    const summaryList =
      document.getElementById("idol-summary-list");


    selectedIdols.forEach(idol => {

      const item = document.createElement("div");

      item.className = "idol-summary-item";

      item.innerHTML = `

        <img src="${idol.image}" alt="${idol.name}">

        <div>
          ${idol.name}
        </div>

      `;

      summaryList.appendChild(item);

    });


    // トーナメント開始

    document
      .getElementById("start-tournament-button")
      .addEventListener("click", () => {

        startTournament();

      });


    // 選び直す

    document
      .getElementById("redo-selection-button")
      .addEventListener("click", () => {

        selectedIdols = [];
        currentGroupIndex = 0;

        showGroupSelection();

      });

  }


  // ==================================================
  // ♡ トーナメント
  // ==================================================

  let currentRound = [];
  let nextRound = [];
  let currentIndex = 0;

  let eliminated = [];

  let leftIdol = null;
  let rightIdol = null;

  // 現在のステージ
  let stage = "normal";

  // 8人になった時点でのメンバー
  let finalEight = [];

  // 8人になるまでに負けたメンバー
  let previousLosers = [];

  // 8人から復活させたメンバー
  let revivedFour = [];

  // 12人になった後の1回戦の勝者・敗者
  let twelveWinners = [];
  let twelveLosers = [];

  // 12人→9人にするための復活メンバー
  let revivedThree = [];

  // 最終9人
  let finalNine = [];


  // ==================================================
  // ♡ トーナメント開始
  // ==================================================

  function startTournament() {

    selectionRoot.style.display = "none";

    originalStartChildren.forEach(child => {
      child.style.display =
        originalStartDisplay.get(child) || "";
    });

    startScreen.style.overflow = "";

    currentRound = shuffle(selectedIdols);

    nextRound = [];
    currentIndex = 0;

    eliminated = [];

    finalEight = [];
    previousLosers = [];

    revivedFour = [];

    twelveWinners = [];
    twelveLosers = [];

    revivedThree = [];

    finalNine = [];

    leftIdol = null;
    rightIdol = null;

    stage = "normal";

    showScreen(matchScreen);

    prepareNormalRound();

  }


  // ==================================================
  // ♡ 通常トーナメント
  // 8人になるまで進める
  // ==================================================

  function prepareNormalRound() {

    currentRound = shuffle(currentRound);

    nextRound = [];
    currentIndex = 0;

    // ------------------------------------------
    // 8人になったら敗者復活メンバー選択へ
    // ------------------------------------------

    if (currentRound.length === 8) {

      finalEight = [...currentRound];

      stage = "revival-four";

      showRevivalFourSelection();

      return;
    }


    // ------------------------------------------
    // 1人なら終了
    // ------------------------------------------

    if (currentRound.length === 1) {

      finalNine = [...currentRound];

      showFinalRankingSelection();

      return;
    }


    stage = "normal";

    if (roundText) {
      roundText.textContent =
        `トーナメント`;
    }

    showNextNormalMatch();

  }


  // ==================================================
  // ♡ 通常対戦表示
  // ==================================================

  function showNextNormalMatch() {

    // 全試合終了
    if (currentIndex >= currentRound.length) {

      currentRound = [...nextRound];

      prepareNormalRound();

      return;
    }


    // 奇数の場合
    if (
      currentIndex === currentRound.length - 1 &&
      currentRound.length % 2 === 1
    ) {

      nextRound.push(
        currentRound[currentIndex]
      );

      currentIndex++;

      showNextNormalMatch();

      return;
    }


    leftIdol =
      currentRound[currentIndex];

    rightIdol =
      currentRound[currentIndex + 1];


    updateMatchDisplay(
      leftIdol,
      rightIdol
    );


    if (matchText) {

      const matchNumber =
        Math.floor(currentIndex / 2) + 1;

      const totalMatches =
        Math.floor(currentRound.length / 2);

      matchText.textContent =
        `MATCH ${matchNumber} / ${totalMatches}`;

    }

  }


  // ==================================================
  // ♡ 対戦カード表示
  // ==================================================

  function updateMatchDisplay(left, right) {

    if (imageLeft) {
      imageLeft.src = left.image;
    }

    if (imageRight) {
      imageRight.src = right.image;
    }

    if (nameLeft) {
      nameLeft.textContent = left.name;
    }

    if (nameRight) {
      nameRight.textContent = right.name;
    }

    if (groupLeft) {
      groupLeft.textContent = left.group;
    }

    if (groupRight) {
      groupRight.textContent = right.group;
    }

  }


  // ==================================================
  // ♡ 通常対戦の勝者
  // ==================================================

  function chooseNormalWinner(winner, loser) {

    if (!leftIdol || !rightIdol) return;

    const savedWinner = winner;
    const savedLoser = loser;

    leftIdol = null;
    rightIdol = null;

    nextRound.push(savedWinner);

    // 8人になるまでに負けた人を記録
    previousLosers.push(savedLoser);

    eliminated.push(savedLoser);

    currentIndex += 2;


    setTimeout(() => {

      showNextNormalMatch();

    }, 150);

  }


  // ==================================================
  // ♡ 8人時点
  // 敗者復活4人を選択
  // ==================================================

  function showRevivalFourSelection() {

    showScreen(startScreen);

    originalStartChildren.forEach(child => {
      child.style.display = "none";
    });

    selectionRoot.style.display = "block";
    selectionRoot.innerHTML = "";


    const availableLosers =
      previousLosers.filter(
        idol => !finalEight.includes(idol)
      );


    selectionRoot.innerHTML = `

      <div class="idol-select-title">
        敗者復活戦 ♡
      </div>

      <div class="idol-select-subtitle">
        8人まで勝ち残ったよ！
        <br>
        これまでに負けたメンバーから
        復活させたい子を選んでね
      </div>

      <div class="idol-select-progress">
        最大4人まで選択できます
      </div>

      <div
        class="idol-select-grid"
        id="revival-four-grid"
      ></div>

      <button
        class="idol-select-button"
        id="revival-four-next"
      >
        選択完了 ♡
      </button>

    `;


    const grid =
      document.getElementById(
        "revival-four-grid"
      );


    const selected = new Set();


    availableLosers.forEach(idol => {

      const card =
        document.createElement("div");

      card.className =
        "idol-select-card";


      card.innerHTML = `

        <img
          src="${idol.image}"
          alt="${idol.name}"
        >

        <div class="idol-select-heart">
          ♡
        </div>

        <div class="idol-select-name">
          ${idol.name}
        </div>

      `;


      card.addEventListener(
        "click",
        () => {

          // すでに選択している
          if (selected.has(idol)) {

            selected.delete(idol);

            card.classList.remove(
              "selected"
            );

            card.querySelector(
              ".idol-select-heart"
            ).textContent = "♡";

            return;
          }


          // 4人以上は選べない
          if (selected.size >= 4) {

            return;

          }


          selected.add(idol);

          card.classList.add(
            "selected"
          );

          card.querySelector(
            ".idol-select-heart"
          ).textContent = "♥";

        }
      );


      grid.appendChild(card);

    });


    document
      .getElementById(
        "revival-four-next"
      )
      .addEventListener(
        "click",
        () => {

          revivedFour =
            [...selected];


          // --------------------------------
          // 4人選べた場合
          // 8 + 4 = 12人
          // --------------------------------

          if (revivedFour.length === 4) {

            currentRound = shuffle([
              ...finalEight,
              ...revivedFour
            ]);

            startTwelvePersonRound();

            return;
          }


          // --------------------------------
          // 4人未満
          // → 8人のまま
          // --------------------------------

          currentRound =
            shuffle(finalEight);

          startEightPersonFinalRound();

        }
      );

  }


  // ==================================================
  // ♡ 4人復活 → 12人
  // ==================================================

  function startTwelvePersonRound() {

    nextRound = [];
    currentIndex = 0;

    twelveWinners = [];
    twelveLosers = [];

    stage = "twelve";

    showScreen(matchScreen);

    if (roundText) {
      roundText.textContent =
        "敗者復活後・12人戦";
    }

    showNextTwelveMatch();

  }


  // ==================================================
  // ♡ 12人戦
  // 12 → 勝者6 / 敗者6
  // ==================================================

  function showNextTwelveMatch() {

    // 全試合終了
    if (currentIndex >= currentRound.length) {

      // 6人勝者・6人敗者
      startRevivalThreeSelection();

      return;
    }


    leftIdol =
      currentRound[currentIndex];

    rightIdol =
      currentRound[currentIndex + 1];


    updateMatchDisplay(
      leftIdol,
      rightIdol
    );


    if (matchText) {

      const matchNumber =
        Math.floor(currentIndex / 2) + 1;

      matchText.textContent =
        `MATCH ${matchNumber} / 6`;

    }

  }


  // ==================================================
  // ♡ 12人戦の勝者
  // ==================================================

  function chooseTwelveWinner(
    winner,
    loser
  ) {

    if (!leftIdol || !rightIdol) return;

    twelveWinners.push(winner);
    twelveLosers.push(loser);

    eliminated.push(loser);

    leftIdol = null;
    rightIdol = null;

    currentIndex += 2;


    setTimeout(() => {

      showNextTwelveMatch();

    }, 150);

  }


  // ==================================================
  // ♡ 6人の敗者から3人選択
  // ==================================================

  function startRevivalThreeSelection() {

    stage = "revival-three";

    showScreen(startScreen);

    originalStartChildren.forEach(child => {
      child.style.display = "none";
    });

    selectionRoot.style.display = "block";

    selectionRoot.innerHTML = `

      <div class="idol-select-title">
        もう一度、敗者復活戦 ♡
      </div>

      <div class="idol-select-subtitle">
        12人の対戦が終わったよ！
        <br>
        負けた6人の中から
        3人を選んでね
      </div>

      <div class="idol-select-progress">
        3人選択してください
      </div>

      <div
        class="idol-select-grid"
        id="revival-three-grid"
      ></div>

      <button
        class="idol-select-button"
        id="revival-three-next"
      >
        9人を決定 ♡
      </button>

    `;


    const grid =
      document.getElementById(
        "revival-three-grid"
      );


    const selected =
      new Set();


    twelveLosers.forEach(idol => {

      const card =
        document.createElement("div");

      card.className =
        "idol-select-card";


      card.innerHTML = `

        <img
          src="${idol.image}"
          alt="${idol.name}"
        >

        <div class="idol-select-heart">
          ♡
        </div>

        <div class="idol-select-name">
          ${idol.name}
        </div>

      `;


      card.addEventListener(
        "click",
        () => {

          if (selected.has(idol)) {

            selected.delete(idol);

            card.classList.remove(
              "selected"
            );

            card.querySelector(
              ".idol-select-heart"
            ).textContent = "♡";

            return;
          }


          if (selected.size >= 3) {

            return;

          }


          selected.add(idol);

          card.classList.add(
            "selected"
          );

          card.querySelector(
            ".idol-select-heart"
          ).textContent = "♥";

        }
      );


      grid.appendChild(card);

    });


    document
      .getElementById(
        "revival-three-next"
      )
      .addEventListener(
        "click",
        () => {

          if (selected.size !== 3) {

            return;

          }


          revivedThree =
            [...selected];


          finalNine = [
            ...twelveWinners,
            ...revivedThree
          ];


          showFinalRankingSelection();

        }
      );

  }


  // ==================================================
  // ♡ 8人ルート
  // ==================================================

  function startEightPersonFinalRound() {

    finalNine =
      [...finalEight];

    showFinalRankingSelection();

  }


  // ==================================================
  // ♡ 最終9人
  // 順番決定
  // ==================================================

  function showFinalRankingSelection() {

    /*
      ここでは最終メンバーを確認して、
      その後1位〜9位を決定する。
    */

    showScreen(startScreen);

    originalStartChildren.forEach(child => {
      child.style.display = "none";
    });

    selectionRoot.style.display = "block";


    selectionRoot.innerHTML = `

      <div class="idol-select-title">
        最終メンバー決定 ♡
      </div>

      <div class="idol-select-subtitle">
        ここから最終順位を決めるよ！
      </div>

      <div
        class="idol-summary-list"
        id="final-nine-list"
      ></div>

      <button
        class="idol-select-button"
        id="start-final-ranking"
      >
        順位決定スタート ♡
      </button>

    `;


    const list =
      document.getElementById(
        "final-nine-list"
      );


    finalNine.forEach(idol => {

      const item =
        document.createElement("div");

      item.className =
        "idol-summary-item";


      item.innerHTML = `

        <img
          src="${idol.image}"
          alt="${idol.name}"
        >

        <div>
          ${idol.name}
        </div>

        <div style="opacity:0.6;font-size:12px;">
          ${idol.group}
        </div>

      `;


      list.appendChild(item);

    });


    document
      .getElementById(
        "start-final-ranking"
      )
      .addEventListener(
        "click",
        () => {

          startFinalRanking();

        }
      );

  }


  // ==================================================
  // ♡ 最終9人の順位決定
  // ==================================================

  let rankingPool = [];
  let rankingResult = [];


  function startFinalRanking() {

    rankingPool =
      shuffle(finalNine);

    rankingResult = [];

    startRankingRound();

  }


  // ==================================================
  // ♡ 順位決定
  // ==================================================

  function startRankingRound() {

    /*
      1位から順番に決めていく。

      残っているメンバーの中から
      1人を選ぶトーナメントを行い、
      勝者を順位として確定する。

      9人
      ↓
      1位決定
      ↓
      残り8人
      ↓
      2位決定
      ↓
      …
    */

    if (rankingPool.length === 0) {

      showResult(rankingResult);

      return;

    }


    // 1人だけならそのまま
    if (rankingPool.length === 1) {

      rankingResult.push(
        rankingPool[0]
      );

      rankingPool = [];

      showResult(rankingResult);

      return;

    }


    currentRound =
      shuffle(rankingPool);

    nextRound = [];
    currentIndex = 0;

    stage = "ranking";


    if (roundText) {
      roundText.textContent =
        `${rankingResult.length + 1}位決定戦`;
    }


    showNextRankingMatch();

  }


  // ==================================================
  // ♡ 順位決定用対戦
  // ==================================================

  function showNextRankingMatch() {

    // ----------------------------------
    // すべての試合終了
    // ----------------------------------

    if (currentIndex >= currentRound.length) {

      // 1人になったら
      // 今回の順位確定
      if (nextRound.length === 1) {

        const winner =
          nextRound[0];


        rankingResult.push(
          winner
        );


        rankingPool =
          rankingPool.filter(
            idol => idol !== winner
          );


        setTimeout(() => {

          startRankingRound();

        }, 200);

        return;

      }


      currentRound =
        [...nextRound];

      nextRound = [];
      currentIndex = 0;

      showNextRankingMatch();

      return;

    }


    // ----------------------------------
    // 奇数の場合
    // ----------------------------------

    if (
      currentIndex ===
      currentRound.length - 1 &&
      currentRound.length % 2 === 1
    ) {

      nextRound.push(
        currentRound[currentIndex]
      );

      currentIndex++;

      showNextRankingMatch();

      return;

    }


    leftIdol =
      currentRound[currentIndex];

    rightIdol =
      currentRound[currentIndex + 1];


    updateMatchDisplay(
      leftIdol,
      rightIdol
    );


    if (matchText) {

      const matchNumber =
        Math.floor(currentIndex / 2) + 1;

      const totalMatches =
        Math.floor(currentRound.length / 2);

      matchText.textContent =
        `MATCH ${matchNumber} / ${totalMatches}`;

    }

  }


  // ==================================================
  // ♡ 順位決定の勝者
  // ==================================================

  function chooseRankingWinner(
    winner,
    loser
  ) {

    if (!leftIdol || !rightIdol) return;

    nextRound.push(winner);

    leftIdol = null;
    rightIdol = null;

    currentIndex += 2;


    setTimeout(() => {

      showNextRankingMatch();

    }, 150);

  }


  // ==================================================
  // ♡ カードクリック
  // ステージによって処理を分ける
  // ==================================================

  function handleLeftChoice() {

    if (!leftIdol || !rightIdol) return;


    if (stage === "normal") {

      chooseNormalWinner(
        leftIdol,
        rightIdol
      );

      return;

    }


    if (stage === "twelve") {

      chooseTwelveWinner(
        leftIdol,
        rightIdol
      );

      return;

    }


    if (stage === "ranking") {

      chooseRankingWinner(
        leftIdol,
        rightIdol
      );

      return;

    }

  }


  function handleRightChoice() {

    if (!leftIdol || !rightIdol) return;


    if (stage === "normal") {

      chooseNormalWinner(
        rightIdol,
        leftIdol
      );

      return;

    }


    if (stage === "twelve") {

      chooseTwelveWinner(
        rightIdol,
        leftIdol
      );

      return;

    }


    if (stage === "ranking") {

      chooseRankingWinner(
        rightIdol,
        leftIdol
      );

      return;

    }

  }


  // ==================================================
  // ♡ カードクリックイベント
  // ==================================================

  if (cardLeft) {

    cardLeft.addEventListener(
      "click",
      handleLeftChoice
    );

  }


  if (cardRight) {

    cardRight.addEventListener(
      "click",
      handleRightChoice
    );

  }


  // ==================================================
  // ♡ 結果表示
  // ==================================================

  function showResult(ranking) {

    showScreen(resultScreen);

    if (!top9Grid) return;

    top9Grid.innerHTML = "";


    ranking
      .slice(0, 9)
      .forEach((idol, index) => {

        const item =
          document.createElement("div");

        item.className =
          "top9-item";


        item.innerHTML = `

          <div class="rank">
            ${index + 1}
          </div>

          <img
            src="${idol.image}"
            alt="${idol.name}"
          >

          <div class="name">
            ${idol.name}
          </div>

          <div class="group">
            ${idol.group}
          </div>

        `;


        top9Grid.appendChild(item);

      });

  }


  // ==================================================
  // ♡ RETRY
  // ==================================================

  if (retryButton) {

    retryButton.addEventListener(
      "click",
      () => {

        selectedIdols = [];
        currentGroupIndex = 0;

        currentRound = [];
        nextRound = [];
        currentIndex = 0;

        eliminated = [];

        finalEight = [];
        previousLosers = [];

        revivedFour = [];

        twelveWinners = [];
        twelveLosers = [];

        revivedThree = [];

        finalNine = [];

        rankingPool = [];
        rankingResult = [];

        leftIdol = null;
        rightIdol = null;

        stage = "normal";


        selectionRoot.style.display =
          "none";


        originalStartChildren.forEach(
          child => {

            child.style.display =
              originalStartDisplay.get(child)
              || "";

          }
        );


        startScreen.style.overflow = "";

        showScreen(startScreen);

      }
    );

  }

});
