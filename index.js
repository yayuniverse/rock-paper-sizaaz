function randomChoice() {
  let range = Math.floor(Math.random() * 9 + 1);
  if (range <= 3) {
    return "Rock";
  } else if (range === 4 || range === 5 || range === 6) {
    return "Paper";
  } else if (range === 7 || range === 8 || range === 9) {
    return "Scissors";
  }
}

function judge(humanChoice, cpuChoice) {
  if (humanChoice === "Rock" && cpuChoice === "Rock") {
    return "Tie";
  } else if (humanChoice === "Rock" && cpuChoice === "Paper") {
    return "Round lost 😔";
  } else if (humanChoice === "Rock" && cpuChoice === "Scissors") {
    return "Round won 🤩";
  } else if (humanChoice === "Paper" && cpuChoice === "Rock") {
    return "Round won 🤩";
  } else if (humanChoice === "Paper" && cpuChoice === "Paper") {
    return "Tie";
  } else if (humanChoice === "Paper" && cpuChoice === "Scissors") {
    return "Round lost 😔";
  } else if (humanChoice === "Scissors" && cpuChoice === "Rock") {
    return "Round lost 😔";
  } else if (humanChoice === "Scissors" && cpuChoice === "Paper") {
    return "Round won 🤩";
  } else if (humanChoice === "Scissors" && cpuChoice === "Scissors") {
    return "Tie";
  }
}

function pointAssigner(decision) {
  if (decision === "Round won 🤩") {
    humanScore += 1;
  } else if (decision === "Round lost 😔") {
    cpuScore += 1;
  }
}

function scoreUpdate() {
  humanScoreText.textContent = humanScore;
  cpuScoreText.textContent = cpuScore;
}

function disableBtns() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function gameKeeper() {
  switch (3) {
    case humanScore:
      disableBtns();
      gameEndText.textContent = "Game won";
      break;
    case cpuScore:
      disableBtns();
      gameEndText.textContent = "Game lost";
      break;
  }
}

function playRound(choice) {
  humanChoice = choice;
  cpuChoice = randomChoice();
  let decision = judge(humanChoice, cpuChoice);
  pointAssigner(decision);
  scoreUpdate();
  gameKeeper();
  return { decision, humanChoice, cpuChoice };
}

let humanChoice = null;
let cpuChoice = null;
let humanScore = 0;
let cpuScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const restartBtn = document.querySelector(".restart");
const roundResult = document.querySelector(".roundResult");
const humanScoreText = document.querySelector(".humanScore");
const cpuScoreText = document.querySelector(".cpuScore");
const gameEndText = document.querySelector(".gameEnd");

rockBtn.addEventListener("click", function () {
  let result = playRound("Rock");
  roundResult.textContent = `${result.decision}. You chose ${result.humanChoice}, CPU chose ${result.cpuChoice}`;
});

paperBtn.addEventListener("click", function () {
  let result = playRound("Paper");
  roundResult.textContent = `${result.decision}. You chose ${result.humanChoice}, CPU chose ${result.cpuChoice}`;
});

scissorsBtn.addEventListener("click", function () {
  let result = playRound("Scissors");
  roundResult.textContent = `${result.decision}. You chose ${result.humanChoice}, CPU chose ${result.cpuChoice}`;
});

restartBtn.addEventListener("click", function () {
  humanChoice = null;
  cpuChoice = null;
  humanScore = 0;
  cpuScore = 0;
  humanScoreText.textContent = 0;
  cpuScoreText.textContent = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  roundResult.textContent = "";
  gameEndText.textContent = "";
});
