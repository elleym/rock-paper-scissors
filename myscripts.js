let result = '';
let playerScore = 0;
let computerScore = 0;

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
        }
        else if (computerSelection === 'scissor') {
            result = 'You win! Rock beats scissor!'
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'You win! Paper beats rock!'
        }
        else if (computerSelection === 'scissor') {
            result = 'You lose! Scissor beats paper!'
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            result = 'You lose! Rock beats scissor!'
        }
        else if (computerSelection === 'paper') {
            result = 'You win! Scissor beats paper!'
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(result);