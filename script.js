/* ==================================================
   ♡ ヨジャドル好き顔メーカー
   ================================================== */


/* ==================================================
   アイドル登録
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
  }

];


/* ==================================================
   HTMLを読み込んでからゲームを開始
   ================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =========================
       HTML要素
    ========================== */

    const startScreen =
      document.getElementById(
        "start-screen"
      );

    const matchScreen =
      document.getElementById(
        "match-screen"
      );

    const resultScreen =
      document.getElementById(
        "result-screen"
      );


    const startButton =
      document.getElementById(
        "start-button"
      );


    const cardLeft =
      document.getElementById(
        "card-left"
      );

    const cardRight =
      document.getElementById(
        "card-right"
      );


    const imageLeft =
      document.getElementById(
        "image-left"
      );

    const imageRight =
      document.getElementById(
        "image-right"
      );


    const nameLeft =
      document.getElementById(
        "name-left"
      );

    const nameRight =
      document.getElementById(
        "name-right"
      );


    const groupLeft =
      document.getElementById(
        "group-left"
      );

    const groupRight =
      document.getElementById(
        "group-right"
      );


    const roundText =
      document.getElementById(
        "round-text"
      );

    const matchText =
      document.getElementById(
        "match-text"
      );


    const top9Grid =
      document.getElementById(
        "top9-grid"
      );


    const retryButton =
      document.getElementById(
        "retry-button"
      );


    /* =========================
       ゲーム変数
    ========================== */

    let currentRound = [];

    let nextRound = [];

    let currentIndex = 0;

    let roundNumber = 1;

    let leftIdol = null;

    let rightIdol = null;

    let ranking = [];


    /* =========================
       画面切り替え
    ========================== */

    function showScreen(screen) {

      startScreen.classList.remove(
        "active"
      );

      matchScreen.classList.remove(
        "active"
      );

      resultScreen.classList.remove(
        "active"
      );

      screen.classList.add(
        "active"
      );
    }


    /* =========================
       シャッフル
    ========================== */

    function shuffle(array) {

      const result =
        [...array];


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


    /* =========================
       START
    ========================== */

    startButton.addEventListener(
      "click",
      function () {

        currentRound =
          shuffle(idols);

        nextRound = [];

        currentIndex = 0;

        roundNumber = 1;

        ranking = [];

        showScreen(
          matchScreen
        );

        prepareRound();

      }
    );


    /* =========================
       ラウンド準備
    ========================== */

    function prepareRound() {

      currentIndex = 0;

      nextRound = [];

      currentRound =
        shuffle(currentRound);


      showNextMatch();

    }


    /* =========================
       次の対戦
    ========================== */

    function showNextMatch() {


      /* ラウンド終了 */

      if (
        currentIndex >=
        currentRound.length
      ) {

        finishRound();

        return;
      }


      /* 奇数なら最後の1人は不戦勝 */

      if (
        currentIndex ===
        currentRound.length - 1
      ) {

        nextRound.push(
          currentRound[
            currentIndex
          ]
        );

        currentIndex++;

        showNextMatch();

        return;
      }


      /* 対戦相手 */

      leftIdol =
        currentRound[
          currentIndex
        ];

      rightIdol =
        currentRound[
          currentIndex + 1
        ];


      /* 写真 */

      imageLeft.src =
        leftIdol.image;

      imageRight.src =
        rightIdol.image;


      /* 名前 */

      nameLeft.textContent =
        leftIdol.name;

      nameRight.textContent =
        rightIdol.name;


      /* グループ */

      groupLeft.textContent =
        leftIdol.group;

      groupRight.textContent =
        rightIdol.group;


      /* ラウンド */

      roundText.textContent =
        "ROUND " +
        roundNumber;


      /* 試合番号 */

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


    /* =========================
       左を選択
    ========================== */

    cardLeft.addEventListener(
      "click",
      function () {

        chooseWinner(
          leftIdol,
          rightIdol
        );

      }
    );


    /* =========================
       右を選択
    ========================== */

    cardRight.addEventListener(
      "click",
      function () {

        chooseWinner(
          rightIdol,
          leftIdol
        );

      }
    );


    /* =========================
       勝者決定
    ========================== */

    function chooseWinner(
      winner,
      loser
    ) {

      /* 勝者を次のラウンドへ */

      nextRound.push(
        winner
      );


      /*
        敗者はランキング候補として
        記録しておく
      */

      ranking.push(
        loser
      );


      currentIndex += 2;


      showNextMatch();

    }


    /* =========================
       ラウンド終了
    ========================== */

    function finishRound() {


      /* 優勝者決定 */

      if (
        nextRound.length === 1
      ) {

        const champion =
          nextRound[0];


        /*
          優勝者を1位にする
        */

        const finalRanking =
          [
            champion,
            ...ranking.reverse()
          ];


        /*
          重複を削除
        */

        const unique = [];


        finalRanking.forEach(
          function (idol) {

            const already =
              unique.some(
                function (item) {

                  return (
                    item.name ===
                    idol.name
                  );

                }
              );


            if (!already) {

              unique.push(idol);

            }

          }
        );


        /*
          足りなければ残りを追加
        */

        idols.forEach(
          function (idol) {

            if (
              unique.length < 9
              &&
              !unique.some(
                function (item) {

                  return (
                    item.name ===
                    idol.name
                  );

                }
              )
            ) {

              unique.push(
                idol
              );

            }

          }
        );


        showResult(
          unique.slice(0, 9)
        );


        return;

      }


      /* 次のラウンド */

      currentRound =
        nextRound;

      roundNumber++;

      prepareRound();

    }


    /* =========================
       結果表示
    ========================== */

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


    /* =========================
       もう一度遊ぶ
    ========================== */

    retryButton.addEventListener(
      "click",
      function () {

        showScreen(
          startScreen
        );

      }
    );


  }
);
