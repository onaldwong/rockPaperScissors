let choices = ["rock", "paper,", "scissors"];
let gameRounds = 5;



function getComputerChoice() {
    randomChoice = Math.floor(Math.random()*choices.length);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else if (randomChoice === 2)
        return "scissors";
    
}
let computerChoice = getComputerChoice()
console.log(computerChoice)

function askPlayerChoice() {
    let playerChoicePrompt = prompt("Choose - rock, paper, scissors")
    playerChoice = playerChoicePrompt.toLowerCase();
    return playerChoice;
}


// let playerChoicePrompt = prompt("Choose - rock, paper, scissors")
// playerChoice = playerChoicePrompt.toLowerCase();
// console.log(playerChoice)
// function playerSelection() {
//     if (computerChoice === "rock" && playerChoice === "scissors") {
//         return "You Lose! Rock beats Scissors!";
//     } else if (computerChoice === "scissors" && playerChoice === "rock") {
//         return "You Win! Rock beats scissors!";
//     } else if (computerChoice === "scissors" && playerChoice === "paper") {
//         return "You Lose! Scissors beats paper!";
//     } else if (computerChoice === "paper" && playerChoice === "scissors") {
//         return "You Win! Scissors beats Paper!";
//     } else if (computerChoice === "paper" && playerChoice === "rock") {
//         return "You Lose! Paper beats Rock!";
//     } else if (computerChoice === "rock" && playerChoice === "paper") {
//         return "You Win! Paper beats Rock"; } else
//         return "Draw"
// }


function playRound() {
    playerChoice = askPlayerChoice();
    computerChoice = getComputerChoice();
    if (computerChoice === "rock" && playerChoice === "scissors") {
                return "You Lose! Rock beats Scissors!";
            } else if (computerChoice === "scissors" && playerChoice === "rock") {
                return "You Win! Rock beats scissors!";
            } else if (computerChoice === "scissors" && playerChoice === "paper") {
                return "You Lose! Scissors beats paper!";
            } else if (computerChoice === "paper" && playerChoice === "scissors") {
                return "You Win! Scissors beats Paper!";
            } else if (computerChoice === "paper" && playerChoice === "rock") {
                return "You Lose! Paper beats Rock!";
            } else if (computerChoice === "rock" && playerChoice === "paper") {
                return "You Win! Paper beats Rock"; 
            } else if (playerChoice === "") {
                return "choose something!"
            } else
                return "Draw"
  }
   
  
  const computerSelection = getComputerChoice();


  
function game() {
    for (let i = 0; i < 5; i++) {
        let winner = playRound();
        alert(winner);
    } alert("Game Over!")
}


console.log(game())
