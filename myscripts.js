let result = '';
let playerScore = 0;
let computerScore = 0;

let playerSelection = prompt("Type rock, paper, or scissor");

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
            computerScore++
        }
        else if (computerSelection === 'scissor') {
            result = 'You win! Rock beats scissor!'
            playerScore++
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'You win! Paper beats rock!'
            playerScore++
        }
        else if (computerSelection === 'scissor') {
            result = 'You lose! Scissor beats paper!'
            computerScore++
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            result = 'You lose! Rock beats scissor!'
            computerScore++
        }
        else if (computerSelection === 'paper') {
            result = 'You win! Scissor beats paper!'
            playerScore++
        }
    }
}
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
console.log(result);

