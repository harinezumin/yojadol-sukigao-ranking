const IDOLS = [
  { name: "Wonyoung", group: "IVE", image: "images/wonyoung.jpg" },
  { name: "Rei", group: "IVE", image: "images/rei.jpg" },
  { name: "Karina", group: "aespa", image: "images/karina.jpg" },
  { name: "Winter", group: "aespa", image: "images/winter.jpg" },
  { name: "Sullyoon", group: "NMIXX", image: "images/sullyoon.jpg" },
  { name: "Haewon", group: "NMIXX", image: "images/haewon.jpg" },
  { name: "Sana", group: "TWICE", image: "images/sana.jpg" },
  { name: "Tzuyu", group: "TWICE", image: "images/tzuyu.jpg" },
  { name: "Minji", group: "NewJeans", image: "images/minji.jpg" },
  { name: "Danielle", group: "NewJeans", image: "images/danielle.jpg" },
  { name: "Jennie", group: "BLACKPINK", image: "images/jennie.jpg" },
  { name: "Jisoo", group: "BLACKPINK", image: "images/jisoo.jpg" },
  { name: "Stella", group: "Hearts2Hearts", image: "images/stella.jpg" },
  { name: "Jiwoo", group: "Hearts2Hearts", image: "images/jiwoo.jpg" },
  { name: "Soa", group: "tripleS", image: "images/soa.jpg" },
  { name: "HaYeon", group: "tripleS", image: "images/hayeon.jpg" },
  { name: "Rescene member", group: "RESCENE", image: "images/rescene.jpg" },
  { name: "Yujin", group: "IVE", image: "images/yujin.jpg" },
  { name: "Liz", group: "IVE", image: "images/liz.jpg" },
  { name: "Chaewon", group: "LE SSERAFIM", image: "images/chaewon.jpg" }
];

const state = { round: 0, maxRounds: 20, wins: {}, seenPairs: new Set(), current: [] };

const $ = id => document.getElementById(id);
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
}
function pairKey(a,b) { return [a.name,b.name].sort().join("___"); }

function randomPair() {
  const possible = [];
  for (let i=0;i<IDOLS.length;i++) for (let j=i+1;j<IDOLS.length;j++) {
    const key = pairKey(IDOLS[i], IDOLS[j]);
    if (!state.seenPairs.has(key)) possible.push([IDOLS[i], IDOLS[j]]);
  }
  if (!possible.length) state.seenPairs.clear();
  const list = possible.length ? possible : IDOLS.flatMap((a,i) =>
    IDOLS.slice(i+1).map(b => [a,b]));
  return list[Math.floor(Math.random()*list.length)];
}

function renderChoice(button, idol) {
  button.querySelector("img").src = idol.image;
  button.querySelector("img").alt = idol.name;
  button.querySelector(".name").textContent = idol.name;
  button.querySelector(".group").textContent = idol.group;
  button.onclick = () => choose(idol);
}

function nextQuestion() {
  if (state.round >= state.maxRounds) return finish();
  const [a,b] = randomPair();
  state.current = [a,b];
  state.seenPairs.add(pairKey(a,b));
  $("progress").textContent = `${state.round + 1} / ${state.maxRounds}`;
  renderChoice($("choiceA"), a);
  renderChoice($("choiceB"), b);
}

function choose(winner) {
  state.wins[winner.name] = (state.wins[winner.name] || 0) + 1;
  state.round++;
  nextQuestion();
}

function finish() {
  const ranking = [...IDOLS].sort((a,b) =>
    (state.wins[b.name] || 0) - (state.wins[a.name] || 0)
  ).slice(0,9);
  $("resultList").innerHTML = ranking.map((idol,i) => `
    <div class="result-item">
      <div class="rank">${String(i+1).padStart(2,"0")}</div>
      <img src="${idol.image}" alt="${idol.name}">
      <div><div class="result-name">${idol.name}</div><span class="result-group">${idol.group}</span></div>
      <div class="score">${state.wins[idol.name] || 0}♡</div>
    </div>
  `).join("");
  $("copyMessage").textContent = "";
  state.ranking = ranking;
  show("result");
}

function start() {
  state.round = 0; state.wins = {}; state.seenPairs.clear();
  show("quiz"); nextQuestion();
}

$("startBtn").onclick = start;
$("retryBtn").onclick = start;
$("copyBtn").onclick = async () => {
  const text = "♡ ヨジャドル好き顔ランキング ♡\n" +
    state.ranking.map((x,i)=>`${i+1}. ${x.name}（${x.group}）`).join("\n");
  try {
    await navigator.clipboard.writeText(text);
    $("copyMessage").textContent = "結果をコピーしたよ ♡";
  } catch {
    $("copyMessage").textContent = text;
  }
};
