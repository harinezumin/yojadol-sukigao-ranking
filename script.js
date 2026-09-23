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
  image: "IMG_1000.jpeg"
},
{
  name: "Bome",
  group: "Atheart",
  image: "IMG_1001.jpeg"
},
{
  name: "Seohyeon",
  group: "Atheart",
  image: "IMG_1002.jpeg"
},
{
  name: "Aurora",
  group: "Atheart",
  image: "IMG_1003.jpeg"
},
{
  name: "Nahyun",
  group: "Atheart",
  image: "IMG_1004.jpeg"
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
