let result = '';
let winLoss = '';
let computerSelection = computerPlay();
let playerSelection = prompt("Type rock, paper, or scissor");
playerSelection = playerSelection.toLowerCase();

// Function for random computer choice using an array
function computerPlay() {
    let random = ['rock', 'paper', 'scissor']
     return random[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "It's a draw!"
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = 'You lose! Paper beats rock!'
            winLoss = 'loss'
        }
        else if (computerSelection === 'scissor') {
            result = 'You win! Rock beats scissor!'
            winLoss = 'win';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'You win! Paper beats rock!'
            winLoss = 'win';
        }
        else if (computerSelection === 'scissor') {
            result = 'You lose! Scissor beats paper!'
            winLoss = 'loss';
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            result = 'You lose! Rock beats scissor!'
            winLoss = 'loss';
        }
        else if (computerSelection === 'paper') {
            result = 'You win! Scissor beats paper!'
            winLoss = 'win';
        }
    }
}

let round = 0;  
let playerScore = 0;
let computerScore = 0;

// Create a function that loops through the playRound function five times
function game() {
    for (let i=0; i < 5; i++) {
        playRound(playerSelection, computerSelection) 
        computerSelection = computerPlay();
        playerSelection = prompt("Type rock, paper, or scissor");
        playerSelection = playerSelection.toLowerCase();
        round = i + 1;
        if (winLoss === 'win') {
        playerScore += 1
        }
        else if (winLoss === 'loss') {
        computerScore += 1
        }
    console.log("Round", round)
    console.log("Player Selection", playerSelection);
    console.log("Computer Selection", computerSelection);
    console.log(result);
    console.log("Player Score", playerScore)
    console.log("Computer Score", computerScore)
    }
}
  
game();
