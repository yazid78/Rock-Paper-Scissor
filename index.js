const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const rockBtn = document.querySelector(".rock");
const score = document.querySelector(".tableScore span");
const Game = document.querySelector(".containerGame");

let paper = 0;
let scissor = 1;
let rock = 2;
let player2;
function Random(player1) {
  player2 = Math.floor(Math.random() * 3);
  if (player1 === paper && player2 === rock) {
    console.log("player1 win");
    IncrementScore();
  } else if (player1 === rock && player2 === scissor) {
    console.log("player1 win");
    IncrementScore();
  } else if (player1 === scissor && player2 === paper) {
    console.log("player1 win");
  } else if (player1 === player2) {
    console.log("égalité");
  } else {
    console.log("player 2 win");
    DecrementScore();
    if (player2 === rock && player1 === paper) {
    }
  }
}

paperBtn.addEventListener("click", () => {
  Random(paper);
  Affichage(paper, player2);
  showRestartButton();
});
scissorBtn.addEventListener("click", () => {
  Random(scissor);
  Affichage(scissor, player2);
  showRestartButton();
});
rockBtn.addEventListener("click", () => {
  Random(rock);
  Affichage(rock, player2);
  showRestartButton();
});

function IncrementScore() {
  let result = parseInt(score.textContent);
  score.textContent = result + 1;
}
function DecrementScore() {
  let result = parseInt(score.textContent);
  if (result >= 1) {
    score.textContent = result - 1;
  }
}

function Affichage(playerChoice, player2) {
  Game.innerHTML = "";
  const imagePlayer1 = document.createElement("img");
  const youpicked = document.createElement("h2");
  youpicked.classList.add("youpicked");
  if (playerChoice === paper) {
    imagePlayer1.src = "./images/icon-paper.svg";
    youpicked.textContent = "You Picked";
  } else if (playerChoice === scissor) {
    imagePlayer1.src = "./images/icon-scissors.svg";
    youpicked.textContent = "You Picked";
  } else if (playerChoice === rock) {
    imagePlayer1.src = "./images/icon-rock.svg";
    youpicked.textContent = "You Picked";
  }

  imagePlayer1.classList.add("imagePlayer1");
  Game.appendChild(youpicked);
  Game.appendChild(imagePlayer1);

  const imagePlayer2 = document.createElement("img");
  const thehousepicked = document.createElement("h2");
  thehousepicked.classList.add("thehousepicked");
  if (player2 === paper) {
    imagePlayer2.src = "./images/icon-paper.svg";
    thehousepicked.textContent = "The House Picked";
  } else if (player2 === scissor) {
    imagePlayer2.src = "./images/icon-scissors.svg";
    thehousepicked.textContent = "The House Picked";
  } else if (player2 === rock) {
    imagePlayer2.src = "./images/icon-rock.svg";
    thehousepicked.textContent = "The House Picked";
  }

  imagePlayer2.classList.add("imagePlayer2");
  Game.appendChild(thehousepicked);
  Game.appendChild(imagePlayer2);
  const resultMessage = document.createElement("p");
  if (
    (playerChoice === paper && player2 === rock) ||
    (playerChoice === rock && player2 === scissor) ||
    (playerChoice === scissor && player2 === paper)
  ) {
    resultMessage.textContent = "You Win!";
    resultMessage.classList.add("message");
  } else if (playerChoice === player2) {
    resultMessage.textContent = "It's a Tie!";
    resultMessage.classList.add("message");
  } else {
    resultMessage.textContent = "You Lose!";
    resultMessage.classList.add("message");
  }
  Game.appendChild(resultMessage);
}

function resetGame() {
  Game.innerHTML = "";

  const triangle = document.createElement("img");
  triangle.src = "./images/bg-triangle.svg";
  triangle.alt = "triangle";
  Game.appendChild(triangle);

  const newPaperBtn = document.createElement("button");
  newPaperBtn.classList.add("paper");
  newPaperBtn.innerHTML = '<img src="./images/icon-paper.svg" alt="paper">';
  newPaperBtn.addEventListener("click", () => {
    Random(paper);
    Affichage(paper, player2);
    showRestartButton();
  });
  Game.appendChild(newPaperBtn);

  const newScissorBtn = document.createElement("button");
  newScissorBtn.classList.add("scissor");
  newScissorBtn.innerHTML = '<img src="./images/icon-scissors.svg" alt="scissor">';
  newScissorBtn.addEventListener("click", () => {
    Random(scissor);
    Affichage(scissor, player2);
    showRestartButton();
  });
  Game.appendChild(newScissorBtn);

  const newRockBtn = document.createElement("button");
  newRockBtn.classList.add("rock");
  newRockBtn.innerHTML = '<img src="./images/icon-rock.svg" alt="rock">';
  newRockBtn.addEventListener("click", () => {
    Random(rock);
    Affichage(rock, player2);
    showRestartButton();
  });
  Game.appendChild(newRockBtn);
}
function showRestartButton() {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart";
  restartBtn.classList.add("restart");
  restartBtn.addEventListener("click", resetGame);
  Game.appendChild(restartBtn);
}
const btnRules = document.querySelector(".rulesBtn");
const rulesImg = document.querySelector(".rulesImg");
const close = document.querySelector(".close");
const containerRules = document.querySelector(".rules");
btnRules.addEventListener("click", () => {
  containerRules.style.display = "flex";
  rulesImg.style.display = "block";
});
close.addEventListener("click", () => {
  containerRules.style.display = "none";
});
