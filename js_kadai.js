// js/js_kadai.js

// クイズの問題と答え（true: ○, false: ×）
const quiz = [
  { question: "HTMLのh1タグは、ページに何度でも使って良い。", answer: true },
  { question: "CSSで文字色を変えるには font-color を使う。", answer: false },
  { question: "HTMLで画像を表示するには <img> タグを使う。", answer: true },
  { question: "CSSのクラスは # で指定する。", answer: false },
  { question: "HTMLのタグは基本的に閉じタグが必要。", answer: true },
  { question: "<br> タグは段落を作るためのタグである。", answer: false },
  { question: "padding は要素の外側の余白を指定する。", answer: false },
  { question: "CSSで display: none; にすると要素は非表示になる。", answer: true },
  { question: "alt 属性はリンクに使う属性である。", answer: false },
  { question: "CSSのtext-align: center;で文字を中央揃えにできる。", answer: true },
];

// 要素の取得
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const trueBtn = document.querySelector(".true");
const falseBtn = document.querySelector(".false");
const feedback = document.querySelector(".feedback");
const scoreDisplay = document.querySelector(".score");
const restartBtn = document.querySelector(".restart-btn");

// 初期化
let currentIndex = 0;
let score = 0;

// クイズを表示する関数
function showQuiz() {
  if (currentIndex < quiz.length) {
    questionNumber.textContent = `問題 ${currentIndex + 1} / ${quiz.length}`;
    questionText.textContent = quiz[currentIndex].question;
    feedback.textContent = "";
  } else {
    questionNumber.textContent = "クイズ終了！";
    questionText.textContent = `あなたのスコアは ${score} 点です。`;
    trueBtn.style.display = "none";
    falseBtn.style.display = "none";
    restartBtn.style.display = "block";

// 🟡スコアに応じたコメント
    let message = "";
    if (score <= 20) {
      message = "努力しましょう！";
    } else if (score <= 50) {
      message = "もう少しがんばろう！";
    } else if (score <= 80) {
      message = "よくできました！";
    } else {
      message = "すごい！おめでとう！";
    }

    feedback.textContent = message;
  }
}

// 回答処理
function answerQuiz(userAnswer) {
  const correct = quiz[currentIndex].answer;
  if (userAnswer === correct) {
    feedback.textContent = "正解！";
    score += 10;
  } else {
    feedback.textContent = "不正解...";
  }
  scoreDisplay.textContent = `${score} 点`;
  currentIndex++;
  setTimeout(showQuiz, 1000); // 1秒後に次の問題
}

// イベント設定
trueBtn.addEventListener("click", () => answerQuiz(true));
falseBtn.addEventListener("click", () => answerQuiz(false));
restartBtn.addEventListener("click", () => location.reload());

// 最初のクイズ表示
showQuiz();
