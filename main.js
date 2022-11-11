// 0 - rock
// 1 - paper
// 2 - scissors
// ✌✋✊

// naming buttons 

let btnRock = document.querySelector('#rock')
let btnPaper = document.querySelector('#paper')
let btnScissors = document.querySelector('#scissors')
let restart = document.querySelector('#restart')

// naming result variables

let computerLives = 0;
let playerLives = 0;
let gameRes = ''

// naming text 

const computerChoiceText = document.querySelector('.pc')
const userChoiceText = document.querySelector('.human')
const resultText = document.querySelector('.weapon')
const playerScore = document.querySelector('.score1')
const computerScore = document.querySelector('.score2')
const firstToScore = document.querySelector('.text')
let footer = document.querySelector('.footer-content')
let computerChoiceText2


//




// computer choice


function computerChoice() {
    let number = Math.floor(Math.random()*3);
    if (number === 0) {
        return '✊'
    } else if (number === 1) {
        return '✋'
    } else {
        return '✌'
    }
}



// round with Rock



function playRoundRock(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    computerChoiceText2 = computerSelection
    playerSelection = '✊';
    if (
        (playerSelection === '✊' && computerSelection === '✌')
    ) {
        playerLives++
        return gameRes = 'You won!'
    } else if (
        playerSelection === '✊' && computerSelection === '✊'
        ) {
        return gameRes = `'It's a tie!'`
    } else (
        (playerSelection === '✊' && computerSelection === '✋')
        )
        computerLives++
        return gameRes = 'You lost!'
}



btnRock.onclick = function playGameRock() {
    playRoundRock();
    updateScore();
    gameEnd();
    resultText.innerText = gameRes
    computerChoiceText.innerText = `Computer choice: ${computerChoiceText2}`
    userChoiceText.innerText = 'Your choice: ✊'
}



// round with Paper




function playRoundPaper(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    computerChoiceText2 = computerSelection
    playerSelection = '✋';
    if (
        (playerSelection === '✋' && computerSelection === '✊')
    ) {
        playerLives++
        return gameRes = 'You won!'
    } else if (
        (playerSelection === '✋' && computerSelection === '✋')
        ) {
           return gameRes = `'It's a tie!'`
    } else (
        (playerSelection === '✋' && computerSelection === '✌')
    ) 
    computerLives++
        return gameRes = 'You lost!'
}

btnPaper.onclick = function playGamePaper() {
    playRoundPaper();
    updateScore();
    gameEnd();
    resultText.innerText = gameRes
    computerChoiceText.innerText = (`Computer choice: ${computerChoiceText2}`)
    userChoiceText.innerText = 'Your choice: ✋'
}



// round with Scissors



function playRoundScissors(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    computerChoiceText2 = computerSelection
    playerSelection = '✌';
    if (
        (playerSelection === '✌' && computerSelection === '✋')
    ) {
        playerLives++
        return gameRes = 'You won!'
    } else if (
        (playerSelection === '✌' && computerSelection === '✌')
        ) {
           return gameRes = `It's a tie!`
    } else 
    (playerSelection === '✌' && computerSelection === '✊') 
    computerLives++
        return gameRes = 'You lost!'
    
}

btnScissors.onclick = function playGameScissors() {
    playRoundScissors();
    updateScore();
    gameEnd();
    resultText.innerText = gameRes
    computerChoiceText.innerText = (`Computer choice: ${computerChoiceText2}`)
    userChoiceText.innerText = 'Your choice: ✌'
}


function gameEnd() {
    if (playerLives === 5 || computerLives === 5) {
        btnRock.setAttribute('disabled', true)
        btnPaper.setAttribute('disabled', true)
        btnScissors.setAttribute('disabled', true)
        restart.style.visibility = 'visible'
    }
    if (playerLives === 5) {
        firstToScore.innerText = 'This time you were stronger than computer. Congrats!'
    } else if (computerLives === 5) {
        firstToScore.innerText = 'Machine is better than you, haha! Maybe you shall play in something else?'
    } else {
        firstToScore.innerText ='First to score 5 points wins the game'
    }
} 



function updateScore() {
    playerScore.innerText = playerLives;
    computerScore.innerText = computerLives;
}


















function refreshPage() {
    window.location.reload(true)
}

restart.addEventListener('click', refreshPage);