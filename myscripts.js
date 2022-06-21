/*
let result = '';
let winLoss = '';
let computerSelection = computerPlay();
let round = 0;  
let playerScore = 0;
let computerScore = 0;


// Random computer selection
function computerPlay() {
    let random = ['rock', 'paper', 'scissor']
     return random[Math.floor(Math.random() * 3)];
}



// End of round
function endRound() {
    if(playerScore === 5 || computerScore === 5)
    buttons.forEach(elem => {
        elem.disabled = true
    });
}

// Gameplay
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
    return;
}

//Game    
function game() {
   for (let i=0; i <= 5; i++) {
        playRound(playerSelection, computerSelection) 
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        round = i + 1;
        if (winLoss === 'win') {
        playerScore += 1
        }
        else if (winLoss === 'loss') {
        computerScore += 1
        }
    }
}


//Game Over
function gameOver () {
    if (playerScore === 5 || computerScore === 5) {
        endRound(
        )
    }

function handleClick(playerSelection){
    if(gameOver()){

    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === "reset"){
            window.location.reload();
        } else {
            game(button.id);
        }
        });
    });

*/

/*
//Attempt 2

let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();
let result = "";

//computer random selection
function computerPlay() {
    let random = ['rock', 'paper', 'scissor'];
    return random[Math.floor(Math.random() * random.length)];
}

function gamePlay(playerSelection) {
    if (playerSelection === computerSelection) {
        result += "It's a draw!"
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result += 'You lose! Paper beats rock!'
            computerScore += 1
        }
        else if (computerSelection === 'scissor') {
            result += 'You win! Rock beats scissor!'
            playerScore += 1;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result += 'You win! Paper beats rock!'
            playerScore += 1;
        }
        else if (computerSelection === 'scissor') {
            result += 'You lose! Scissor beats paper!'
            computerScore += 1;
        }
    }
    else if (playerSelection === 'scissor') {
        if (computerSelection === 'rock') {
            result += 'You lose! Rock beats scissor!'
            computerScore += 1;
        }
        else if (computerSelection === 'paper') {
            result += 'You win! Scissor beats paper!'
            computerScore += 1;
        }
    }
    document.getElementById('result') = result
    return
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click', function (){
        gamePlay(button.id)
    })
})
*/

//Attempt 3
let playerScore = 0
let computerScore = 0
let roundWinner = ""
const buttons = document.querySelectorAll('button')

function computerPlay() {
    let random = ['rock', 'paper', 'scissors']
    return random[Math.floor(Math.random() * random.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissor') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')) {
        
        roundWinner = "player"
        playerScore += 1
        result = (playerSelection + ' defeats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>Human wins! Hit RESTART for rematch.'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        roundWinner = "tie"
        result = (playerSelection + ' vs. ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        roundWinner = "computer"
        computerScore += 1
        result = (computerSelection + ' defeats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>Computer wins. Hit RESTART for rematch.'
            disableButtons()
        }
    }
    updateScore()
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        if(button.id === 'reset') {
            window.location.reload();
        } else {
        playRound(button.id)
        }
    })
})

function updateScore() {
    if(roundWinner === 'tie'){
        scoreMessage.textContent = "Tie"
    } else if (roundWinner === 'player') {
        scoreMessage.textContent = "Human Wins.";
    } else if (roundWinner === 'computer') {
        scoreMessage.textContent = "Computer Wins.";
    }
}

const playerInput = document.getElementById('playerInput');
const computerInput = document.getElementById('computerInput');
const humanScore = document.getElementById('playerScore');
const machineScore = document.getElementById('computerScore')
const scoreMessage = document.getElementById('scoreMessage')

