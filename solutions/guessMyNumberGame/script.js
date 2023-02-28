// https://github.com/Devzstudio/Vscode-Emoji-Snippets/blob/master/snippets/snippets.json

// random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function init() {
  document.querySelector(".guess").value = "";
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input
  if (!guess) {
    displayMessage("⛔️ NO NUMBER!");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🤟 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    // change style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " Too High!" : "Too Low!");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

init();
