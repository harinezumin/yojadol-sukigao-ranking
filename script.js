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


/* ==================================================
   HTML読み込み後
   ================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ==================================================
       元々あるHTML要素
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
       ゲーム変数
       ================================================== */

    let selectedIdols = [];

    let groupList = [];

    let currentGroupIndex = 0;

    let selectedForCurrentGroup = [];

    let currentRound = [];

    let nextRound = [];

    let currentIndex = 0;

    let roundNumber = 1;

    let leftIdol = null;

    let rightIdol = null;

    let eliminated = [];


    /* ==================================================
       画面切り替え
       ================================================== */

    function showScreen(screen) {

      startScreen.classList.remove("active");

      matchScreen.classList.remove("active");

      resultScreen.classList.remove("active");

      screen.classList.add("active");
    }


    /* ==================================================
       シャッフル
       ================================================== */

    function shuffle(array) {

      const result = [...array];

      for (
        let i = result.length - 1;
        i > 0;
        i--
      ) {

        const j =
          Math.floor(
            Math.random() * (i + 1)
          );

        [
          result[i],
          result[j]
        ] =
        [
          result[j],
          result[i]
        ];
      }

      return result;
    }


    /* ==================================================
       グループ一覧を作成
       ================================================== */

    function createGroupList() {

      const groups = [];

      idols.forEach(function (idol) {

        if (
          !groups.includes(idol.group)
        ) {

          groups.push(idol.group);

        }

      });

      return groups;
    }


    /* ==================================================
       選抜画面を作る
       ================================================== */

    let selectionScreen =
      document.createElement("div");

    selectionScreen.id =
      "selection-screen";

    selectionScreen.style.display =
      "none";

    selectionScreen.style.textAlign =
      "center";

    selectionScreen.style.width =
      "100%";

    selectionScreen.style.maxWidth =
      "900px";

    selectionScreen.style.margin =
      "0 auto";

    startScreen.parentNode.appendChild(
      selectionScreen
    );


    /* ==================================================
       選抜画面CSS
       ================================================== */

    const selectionStyle =
      document.createElement("style");

    selectionStyle.textContent = `

      #selection-screen {
        padding: 20px;
        box-sizing: border-box;
      }

      .selection-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .selection-subtitle {
        font-size: 15px;
        margin-bottom: 20px;
        opacity: 0.75;
      }

      .selection-progress {
        font-size: 14px;
        margin-bottom: 18px;
        font-weight: 600;
      }

      .selection-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(140px, 1fr));
        gap: 14px;
        margin-bottom: 24px;
      }

      .selection-card {
        position: relative;
        border: 2px solid #eee;
        border-radius: 18px;
        overflow: hidden;
        background: white;
        cursor: pointer;
        transition:
          transform 0.15s ease,
          border-color 0.15s ease;
      }

      .selection-card:hover {
        transform: translateY(-2px);
      }

      .selection-card.selected {
        border-color: #ff8fbd;
        box-shadow:
          0 0 0 3px rgba(255,143,189,0.15);
      }

      .selection-card img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        display: block;
      }

      .selection-name {
        padding: 9px 5px 11px;
        font-weight: 600;
        font-size: 14px;
      }

      .selection-check {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        box-shadow:
          0 2px 8px rgba(0,0,0,0.12);
      }

      .selection-card.selected
      .selection-check {
        background: #ff8fbd;
        color: white;
      }

      .selection-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .selection-button {
        border: none;
        border-radius: 999px;
        padding: 12px 25px;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
      }

      .selection-next {
        background: #ff8fbd;
        color: white;
      }

      .selection-skip {
        background: #f3f3f3;
        color: #555;
      }

      .selection-count {
        margin-bottom: 14px;
        font-size: 14px;
        font-weight: 600;
      }

      .chosen-title {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      .chosen-subtitle {
        font-size: 14px;
        opacity: 0.7;
        margin-bottom: 20px;
      }

      .chosen-grid {
        display: grid;
        grid-template-columns:
          repeat(auto-fit, minmax(110px, 1fr));
        gap: 12px;
        margin-bottom: 25px;
      }

      .chosen-card {
        border-radius: 15px;
        overflow: hidden;
        background: white;
        border: 1px solid #eee;
      }

      .chosen-card img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        display: block;
      }

      .chosen-name {
        padding: 7px 3px;
        font-size: 13px;
        font-weight: 600;
      }

      .chosen-group {
        font-size: 11px;
        opacity: 0.6;
        padding-bottom: 8px;
      }

      .selection-empty {
        padding: 25px;
        border-radius: 18px;
        background: #f7f7f7;
        margin-bottom: 20px;
      }

    `;

    document.head.appendChild(
      selectionStyle
    );


    /* ==================================================
       START
       ================================================== */

    startButton.addEventListener(
      "click",
      function () {

        selectedIdols = [];

        currentGroupIndex = 0;

        groupList =
          createGroupList();

        selectedForCurrentGroup = [];

        startScreen.style.display =
          "none";

        selectionScreen.style.display =
          "block";

        showGroupSelection();

      }
    );


    /* ==================================================
       グループ選択画面
       ================================================== */

    function showGroupSelection() {

      selectedForCurrentGroup = [];

      const groupName =
        groupList[currentGroupIndex];

      const members =
        idols.filter(
          function (idol) {

            return (
              idol.group === groupName
            );

          }
        );


      selectionScreen.innerHTML = "";


      /* タイトル */

      const title =
        document.createElement("div");

      title.className =
        "selection-title";

      title.textContent =
        groupName;

      selectionScreen.appendChild(
        title
      );


      /* 説明 */

      const subtitle =
        document.createElement("div");

      subtitle.className =
        "selection-subtitle";

      subtitle.textContent =
        "このグループで好きなメンバーを選んでね ♡";

      selectionScreen.appendChild(
        subtitle
      );


      /* 進捗 */

      const progress =
        document.createElement("div");

      progress.className =
        "selection-progress";

      progress.textContent =
        (
          currentGroupIndex + 1
        ) +
        " / " +
        groupList.length;

      selectionScreen.appendChild(
        progress
      );


      /* 選択人数 */

      const count =
        document.createElement("div");

      count.className =
        "selection-count";

      count.textContent =
        "0人選択中";

      selectionScreen.appendChild(
        count
      );


      /* メンバー */

      const grid =
        document.createElement("div");

      grid.className =
        "selection-grid";


      members.forEach(
        function (idol) {

          const card =
            document.createElement("div");

          card.className =
            "selection-card";


          const image =
            document.createElement("img");

          image.src =
            idol.image;

          image.alt =
            idol.name;


          const name =
            document.createElement("div");

          name.className =
            "selection-name";

          name.textContent =
            idol.name;


          const check =
            document.createElement("div");

          check.className =
            "selection-check";

          check.textContent =
            "♡";


          card.appendChild(
            image
          );

          card.appendChild(
            name
          );

          card.appendChild(
            check
          );


          card.addEventListener(
            "click",
            function () {

              const index =
                selectedForCurrentGroup.indexOf(
                  idol
                );


              if (index === -1) {

                selectedForCurrentGroup.push(
                  idol
                );

                card.classList.add(
                  "selected"
                );

                check.textContent =
                  "♥";

              } else {

                selectedForCurrentGroup.splice(
                  index,
                  1
                );

                card.classList.remove(
                  "selected"
                );

                check.textContent =
                  "♡";

              }


              count.textContent =
                selectedForCurrentGroup.length +
                "人選択中";

            }
          );


          grid.appendChild(
            card
          );

        }
      );


      selectionScreen.appendChild(
        grid
      );


      /* ボタン */

      const buttons =
        document.createElement("div");

      buttons.className =
        "selection-buttons";


      const skipButton =
        document.createElement("button");

      skipButton.type =
        "button";

      skipButton.className =
        "selection-button selection-skip";

      skipButton.textContent =
        "このグループはスキップ";


      const nextButton =
        document.createElement("button");

      nextButton.type =
        "button";

      nextButton.className =
        "selection-button selection-next";

      nextButton.textContent =
        currentGroupIndex ===
        groupList.length - 1
          ? "選抜メンバーを見る ♡"
          : "次のグループへ →";


      skipButton.addEventListener(
        "click",
        function () {

          goToNextGroup();

        }
      );


      nextButton.addEventListener(
        "click",
        function () {

          selectedIdols.push(
            ...selectedForCurrentGroup
          );

          goToNextGroup();

        }
      );


      buttons.appendChild(
        skipButton
      );

      buttons.appendChild(
        nextButton
      );

      selectionScreen.appendChild(
        buttons
      );

    }


    /* ==================================================
       次のグループ
       ================================================== */

    function goToNextGroup() {

      currentGroupIndex++;


      if (
        currentGroupIndex >=
        groupList.length
      ) {

        showSelectedIdols();

        return;

      }


      showGroupSelection();

    }


    /* ==================================================
       選抜メンバー確認
       ================================================== */

    function showSelectedIdols() {

      selectionScreen.innerHTML = "";


      const title =
        document.createElement("div");

      title.className =
        "chosen-title";

      title.textContent =
        "あなたが選んだメンバー ♡";

      selectionScreen.appendChild(
        title
      );


      const subtitle =
        document.createElement("div");

      subtitle.className =
        "chosen-subtitle";

      subtitle.textContent =
        selectedIdols.length +
        "人がトーナメントに進出します！";

      selectionScreen.appendChild(
        subtitle
      );


      if (
        selectedIdols.length === 0
      ) {

        const empty =
          document.createElement("div");

        empty.className =
          "selection-empty";

        empty.textContent =
          "まだメンバーが選ばれていないよ。戻って好きな子を選んでね ♡";

        selectionScreen.appendChild(
          empty
        );


        const backButton =
          document.createElement("button");

        backButton.type =
          "button";

        backButton.className =
          "selection-button selection-next";

        backButton.textContent =
          "最初から選び直す";

        backButton.addEventListener(
          "click",
          function () {

            selectionScreen.style.display =
              "none";

            startScreen.style.display =
              "block";

          }
        );

        selectionScreen.appendChild(
          backButton
        );

        return;

      }


      const grid =
        document.createElement("div");

      grid.className =
        "chosen-grid";


      selectedIdols.forEach(
        function (idol) {

          const card =
            document.createElement("div");

          card.className =
            "chosen-card";


          const image =
            document.createElement("img");

          image.src =
            idol.image;

          image.alt =
            idol.name;


          const name =
            document.createElement("div");

          name.className =
            "chosen-name";

          name.textContent =
            idol.name;


          const group =
            document.createElement("div");

          group.className =
            "chosen-group";

          group.textContent =
            idol.group;


          card.appendChild(
            image
          );

          card.appendChild(
            name
          );

          card.appendChild(
            group
          );


          grid.appendChild(
            card
          );

        }
      );


      selectionScreen.appendChild(
        grid
      );


      const startTournament =
        document.createElement("button");

      startTournament.type =
        "button";

      startTournament.className =
        "selection-button selection-next";

      startTournament.textContent =
        "♡ トーナメント開始 ♡";


      startTournament.addEventListener(
        "click",
        function () {

          startTournamentGame();

        }
      );


      selectionScreen.appendChild(
        startTournament
      );

    }


    /* ==================================================
       トーナメント開始
       ================================================== */

    function startTournamentGame() {

      currentRound =
        shuffle(selectedIdols);

      nextRound = [];

      currentIndex = 0;

      roundNumber = 1;

      eliminated = [];

      selectionScreen.style.display =
        "none";

      showScreen(
        matchScreen
      );

      prepareRound();

    }


    /* ==================================================
       ラウンド準備
       ================================================== */

    function prepareRound() {

      currentIndex = 0;

      nextRound = [];

      currentRound =
        shuffle(currentRound);

      showNextMatch();

    }


    /* ==================================================
       次の対戦
       ================================================== */

    function showNextMatch() {

      /* 優勝者決定 */

      if (
        currentRound.length === 1
      ) {

        const champion =
          currentRound[0];

        createFinalRanking(
          champion
        );

        return;

      }


      /* ラウンド終了 */

      if (
        currentIndex >=
        currentRound.length
      ) {

        currentRound =
          nextRound;

        roundNumber++;

        prepareRound();

        return;

      }


      /* 奇数の場合は不戦勝 */

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


      /* 対戦 */

      leftIdol =
        currentRound[
          currentIndex
        ];

      rightIdol =
        currentRound[
          currentIndex + 1
        ];


      imageLeft.src =
        leftIdol.image;

      imageRight.src =
        rightIdol.image;


      nameLeft.textContent =
        leftIdol.name;

      nameRight.textContent =
        rightIdol.name;


      groupLeft.textContent =
        leftIdol.group;

      groupRight.textContent =
        rightIdol.group;


      roundText.textContent =
        "ROUND " +
        roundNumber;


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
       左を選択
       ================================================== */

    cardLeft.addEventListener(
      "click",
      function () {

        if (
          !leftIdol ||
          !rightIdol
        ) {
          return;
        }

        chooseWinner(
          leftIdol,
          rightIdol
        );

      }
    );


    /* ==================================================
       右を選択
       ================================================== */

    cardRight.addEventListener(
      "click",
      function () {

        if (
          !leftIdol ||
          !rightIdol
        ) {
          return;
        }

        chooseWinner(
          rightIdol,
          leftIdol
        );

      }
    );


    /* ==================================================
       勝者決定
       ================================================== */

    function chooseWinner(
      winner,
      loser
    ) {

      nextRound.push(
        winner
      );


      /*
        敗者を記録
        後で結果順位を作る
      */

      eliminated.push(
        loser
      );


      currentIndex += 2;


      /* 選択状態をリセット */

      leftIdol = null;

      rightIdol = null;


      showNextMatch();

    }


    /* ==================================================
       最終ランキング
       ================================================== */

    function createFinalRanking(
      champion
    ) {

      /*
        優勝者を1位にする。

        その後はトーナメントで
        早く敗退した順に並べる。
      */

      const ranking =
        [
          champion,
          ...eliminated
        ];


      const unique = [];


      ranking.forEach(
        function (idol) {

          const exists =
            unique.some(
              function (item) {

                return (
                  item.name === idol.name &&
                  item.group === idol.group
                );

              }
            );


          if (!exists) {

            unique.push(
              idol
            );

          }

        }
      );


      showResult(
        unique.slice(0, 9)
      );

    }


    /* ==================================================
       結果表示
       ================================================== */

    function showResult(
      top9
    ) {

      showScreen(
        resultScreen
      );


      top9Grid.innerHTML =
        "";


      top9.forEach(
        function (idol, index) {

          const item =
            document.createElement(
              "div"
            );

          item.className =
            "top9-item";


          const image =
            document.createElement(
              "img"
            );

          image.src =
            idol.image;

          image.alt =
            idol.name;


          const rank =
            document.createElement(
              "div"
            );

          rank.className =
            "rank";

          rank.textContent =
            "#" +
            (index + 1);


          item.appendChild(
            image
          );

          item.appendChild(
            rank
          );


          top9Grid.appendChild(
            item
          );

        }
      );

    }


    /* ==================================================
       もう一度遊ぶ
       ================================================== */

    retryButton.addEventListener(
      "click",
      function () {

        selectionScreen.style.display =
          "none";

        startScreen.style.display =
          "block";

        showScreen(
          startScreen
        );

        selectedIdols = [];

        currentGroupIndex = 0;

        currentRound = [];

        nextRound = [];

        eliminated = [];

        leftIdol = null;

        rightIdol = null;

      }
    );


  }
);
