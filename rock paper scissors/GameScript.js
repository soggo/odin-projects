// initialize socres and what round is being played
let playerScore = 0;
let computerScore = 0;
let round = 0;
// Randomizer function to generate computer play
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// game round 
function playRound(playerSelection, computerSelection) {
  console.log(`Round ${round}:`);
  console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}.`);

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win this round!`);
    playerScore++;
  } else {
    console.log(`The computer wins this round.`);
    computerScore++;
  }
  round++;
}

const choices = document.querySelectorAll('.choice');

function handleChoiceClick(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateScore();
}
let result = document.querySelector('.result')
result.textContent= "";


function updateScore() {
  console.log(`Score: You ${playerScore} - ${computerScore} Computer, Round: ${round}`);
  let score = document.querySelector('.score');
  score.textContent = `Score: You ${playerScore} - ${computerScore} Computer, Round: ${round}`;
  
  if (playerScore === 5) {
    result.textContent= "Congratulations, you win the game!";
    resetGame();
  } else if (computerScore === 5) {
    result.textContent= "Sorry, the computer wins the game.";
    resetGame();
  }
  if (round === 1){
    let result = document.querySelector('.result');
    result.textContent= "";
  }
 
}

choices.forEach(choice => {
  choice.addEventListener('click', handleChoiceClick);
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;

}