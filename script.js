let userScore = 0;
let computerScore = 0;
let tia = 0;

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const tia_span = document.getElementById("draw");
const resultText_p = document.getElementById("resultText");
const userChoice_div = document.getElementById("userChoice");
const computerChoice_div = document.getElementById("computerChoice");
const userImg = document.getElementById("userImg");
const computerImg = document.getElementById("computerImg");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function userChoice(choice) {
  const computerChoice = getComputerChoice();
  displayChoices("user", choice);
  displayChoices("computer", computerChoice);
  determineWinner(choice, computerChoice);
}

function displayChoices(player, choice) {
  const choiceImg = document.getElementById(`${player}Img`);
  choiceImg.src = `images/${choice}.png`;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultText_p.innerHTML = "It's a draw!";
    tia++;
    updateScore();
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText_p.innerHTML = "You win!";
    userScore++;
    updateScore();
  } else {
    resultText_p.innerHTML = "You lose!";
    computerScore++;
    updateScore();
  }
}

function updateScore() {
  userScore_span.innerHTML = `Your Score: ${userScore}`;
  computerScore_span.innerHTML = `Computer Score: ${computerScore}`;
  tia_span.innerHTML = `Draw: ${tia}`;
}
